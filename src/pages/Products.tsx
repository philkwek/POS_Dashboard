import React, { useCallback, useEffect, useRef, useState } from "react";
import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { deleteObject, ref, StorageReference } from "firebase/storage";
import { StoreItemType } from "@pos-dashboard/shared";
import CreateNewProductModal from "../components/CreateNewProductModal";
import ProductDetailsModal from "../components/ProductDetailsModal";
import {
  ProductEditPayload,
} from "../components/ProductDetailsEditModal";
import { db, storage } from "../firebase";
import {
  getProductImageExtension,
  getProductImageStoragePath,
  uploadProductImage,
} from "../productImages";

const removeUploadedImages = async (uploadedRefs: StorageReference[]) => {
  const results = await Promise.allSettled(
    uploadedRefs.map((uploadedRef) => deleteObject(uploadedRef)),
  );
  const failures = results.filter((result) => result.status === "rejected");
  if (failures.length > 0) {
    console.warn("Failed to roll back some newly uploaded product images:", failures);
  }
};

const removeSupersededImages = async (
  productId: string,
  urls: string[],
) => {
  for (const url of [...new Set(urls.filter(Boolean))]) {
    const storagePath = getProductImageStoragePath(url, productId);
    if (!storagePath) {
      console.warn("Skipped product image cleanup for an unrecognized URL:", url);
      continue;
    }

    try {
      await deleteObject(ref(storage, storagePath));
    } catch (error) {
      const errorCode = (error as { code?: string }).code;
      if (errorCode !== "storage/object-not-found") {
        console.warn(`Failed to delete superseded image ${storagePath}:`, error);
      }
    }
  }
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<StoreItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<StoreItemType | null>(
    null,
  );
  const selectedProductTriggerRef = useRef<HTMLElement | null>(null);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setLoadError(null);
    try {
      const snapshot = await getDocs(collection(db, "products"));
      setProducts(
        snapshot.docs.map(
          (productDoc) =>
            ({
              id: productDoc.id,
              ...productDoc.data(),
            }) as StoreItemType,
        ),
      );
    } catch (error) {
      console.error("Failed to load products:", error);
      setLoadError("Failed to load products. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchProducts();
  }, [fetchProducts]);

  const handleProductCreated = (product: StoreItemType) => {
    setProducts((currentProducts) => [product, ...currentProducts]);
  };

  const handleOpenProductDetails = (
    product: StoreItemType,
    trigger: HTMLElement,
  ) => {
    selectedProductTriggerRef.current = trigger;
    setSelectedProduct(product);
  };

  const handleCloseProductDetails = useCallback(() => {
    setSelectedProduct(null);
    window.requestAnimationFrame(() => {
      selectedProductTriggerRef.current?.focus();
      selectedProductTriggerRef.current = null;
    });
  }, []);

  const handleSaveProductEdits = useCallback(
    async (payload: ProductEditPayload) => {
      const variantsWithoutIds = payload.productPatch.variants.filter(
        (variant) => !variant.id,
      );
      if (variantsWithoutIds.length > 0) {
        throw new Error("Every variant must have an ID before it can be saved.");
      }

      const uploadedRefs: StorageReference[] = [];
      let imageURL = payload.imageOperations.cover.currentUrl;
      let productImageUrl = payload.imageOperations.small.currentUrl;
      const uploadedAdditionalUrls: string[] = [];

      try {
        const coverFile = payload.imageOperations.cover.replacementFile;
        if (coverFile) {
          const upload = await uploadProductImage(
            payload.productId,
            `cover/${crypto.randomUUID()}.${getProductImageExtension(coverFile)}`,
            coverFile,
          );
          uploadedRefs.push(upload.ref);
          imageURL = upload.url;
        }

        const smallFile = payload.imageOperations.small.replacementFile;
        if (smallFile) {
          const upload = await uploadProductImage(
            payload.productId,
            `small/${crypto.randomUUID()}.${getProductImageExtension(smallFile)}`,
            smallFile,
          );
          uploadedRefs.push(upload.ref);
          productImageUrl = upload.url;
        }

        for (const [index, file] of payload.imageOperations.additional.addedFiles.entries()) {
          const upload = await uploadProductImage(
            payload.productId,
            `additional/${index}-${crypto.randomUUID()}.${getProductImageExtension(file)}`,
            file,
          );
          uploadedRefs.push(upload.ref);
          uploadedAdditionalUrls.push(upload.url);
        }

        const additionalImages = [
          ...payload.imageOperations.additional.retainedUrls,
          ...uploadedAdditionalUrls,
        ];
        const productRef = doc(db, "products", payload.productId);
        const batch = writeBatch(db);

        batch.update(productRef, {
          ...payload.productPatch,
          imageURL,
          productImageUrl,
          additionalImages,
        });

        for (const variant of payload.variantOperations.upsert) {
          if (!variant.id) {
            throw new Error("Cannot save a variant without a document ID.");
          }
          batch.set(doc(collection(productRef, "variants"), variant.id), variant);
        }
        for (const variantId of payload.variantOperations.deleteIds) {
          batch.delete(doc(collection(productRef, "variants"), variantId));
        }

        await batch.commit();

        const persistedProduct: StoreItemType = {
          id: payload.productId,
          ...payload.productPatch,
          imageURL,
          productImageUrl,
          additionalImages,
        };
        setProducts((currentProducts) =>
          currentProducts.map((product) =>
            product.id === payload.productId ? persistedProduct : product,
          ),
        );
      } catch (error) {
        await removeUploadedImages(uploadedRefs);
        throw error;
      }

      const supersededUrls = [
        ...(payload.imageOperations.cover.replacementFile
          ? [payload.imageOperations.cover.currentUrl]
          : []),
        ...(payload.imageOperations.small.replacementFile
          ? [payload.imageOperations.small.currentUrl]
          : []),
        ...payload.imageOperations.additional.deletedUrls,
      ];
      await removeSupersededImages(payload.productId, supersededUrls);
    },
    [],
  );

  return (
    <div className="flex h-full w-full flex-col gap-4 p-5 pt-1">
      <div>
        <h1 className="text-4xl font-bold">Products &amp; Inventory</h1>
        <p className="opacity-70">Create, Update and Delete Products</p>
      </div>

      <div className="flex justify-end gap-2">
        <button
          className="btn btn-outline"
        >
          Edit Products
        </button>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="btn btn-outline"
        >
          + Create New Product
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center p-10">
          <span className="loading loading-spinner loading-lg text-primary" />
        </div>
      ) : loadError ? (
        <div className="alert alert-error">
          <span>{loadError}</span>
          <button className="btn btn-sm" onClick={() => void fetchProducts()}>
            Retry
          </button>
        </div>
      ) : products.length === 0 ? (
        <div className="rounded-lg border border-dashed border-base-300 p-10 text-center text-base-content/60">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="card cursor-pointer border border-base-200 bg-base-100 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              role="button"
              tabIndex={0}
              aria-label={`View details for ${product.name}`}
              aria-haspopup="dialog"
              onClick={(event) =>
                handleOpenProductDetails(product, event.currentTarget)
              }
              onKeyDown={(event) => {
                if (event.key !== "Enter" && event.key !== " ") return;
                event.preventDefault();
                handleOpenProductDetails(product, event.currentTarget);
              }}
            >
              <figure className="aspect-video bg-base-200">
                <img
                  src={product.imageURL}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body gap-2 p-4">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="card-title">{product.name}</h2>
                  <span
                    className={`badge ${product.isActive ? "badge-success" : "badge-ghost"}`}
                  >
                    {product.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
                <p className="text-sm text-base-content/70">
                  ${product.basePrice.toFixed(2)}
                </p>
                <p className="text-xs text-base-content/60">
                  {product.variants?.length || 0} variant(s)
                </p>
              </div>
            </article>
          ))}
        </div>
      )}

      {isCreateModalOpen && (
        <CreateNewProductModal
          onClose={() => setIsCreateModalOpen(false)}
          onCreated={handleProductCreated}
        />
      )}

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={handleCloseProductDetails}
          onSave={handleSaveProductEdits}
        />
      )}
    </div>
  );
};

export default Products;
