import React, { useCallback, useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { StoreItemType, StoreItemVariantType } from "@pos-dashboard/shared";
import ProductDetailsEditModal, {
  ProductEditPayload,
} from "./ProductDetailsEditModal";
import { db } from "../firebase";

interface ProductDetailsModalProps {
  product: StoreItemType;
  onClose: () => void;
  onSave: (payload: ProductEditPayload) => void | Promise<void>;
}

const formatCurrency = (value: number) =>
  Number.isFinite(value) ? `$${value.toFixed(2)}` : "—";

const formatModifier = (value: number) => {
  if (!Number.isFinite(value)) return "—";
  if (value > 0) return `+$${value.toFixed(2)}`;
  if (value < 0) return `-$${Math.abs(value).toFixed(2)}`;
  return "$0.00";
};

const ProductImage: React.FC<{
  src?: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = "aspect-video w-full" }) => {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);

  if (!src || failed) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-base-200 text-sm text-base-content/50`}
        role="img"
        aria-label={`${alt} unavailable`}
      >
        Image unavailable
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} bg-base-200 object-contain`}
      onError={() => setFailed(true)}
    />
  );
};

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
  onSave,
}) => {
  const [variants, setVariants] = useState<StoreItemVariantType[]>([]);
  const [isLoadingVariants, setIsLoadingVariants] = useState(true);
  const [variantError, setVariantError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const editButtonRef = useRef<HTMLButtonElement>(null);

  const fetchVariants = useCallback(async () => {
    setIsLoadingVariants(true);
    setVariantError(null);
    try {
      const snapshot = await getDocs(
        collection(db, "products", product.id, "variants"),
      );
      setVariants(
        snapshot.docs.map((variantDoc) => ({
          id: variantDoc.id,
          ...variantDoc.data(),
        })) as StoreItemVariantType[],
      );
    } catch (error) {
      console.error("Failed to load product variants:", error);
      setVariantError("Failed to load variants and stock. Please try again.");
    } finally {
      setIsLoadingVariants(false);
    }
  }, [product.id]);

  useEffect(() => void fetchVariants(), [fetchVariants]);

  useEffect(() => {
    if (isEditing) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isEditing, onClose]);

  const handleCancelEdit = () => {
    setIsEditing(false);
    window.requestAnimationFrame(() => editButtonRef.current?.focus());
  };

  if (isEditing) {
    return (
      <ProductDetailsEditModal
        product={product}
        variants={variants}
        onSave={onSave}
        onCancel={handleCancelEdit}
        onClose={onClose}
      />
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-details-title"
      >
        <header className="flex items-start justify-between gap-3 border-b border-base-200 p-6 pb-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2
                id="product-details-title"
                className="truncate text-xl font-extrabold sm:text-2xl"
              >
                {product.name}
              </h2>
              <span
                className={`badge ${product.isActive ? "badge-success" : "badge-ghost"}`}
              >
                {product.isActive ? "Active" : "Inactive"}
              </span>
            </div>
            <p className="mt-1 break-all font-mono text-xs text-base-content/50">
              Product ID: {product.id}
            </p>
          </div>
          <div className="flex flex-row shrink-0 gap-2">
            <button
              ref={editButtonRef}
              type="button"
              className="btn btn-outline btn-sm place-self-center"
              disabled={isLoadingVariants || Boolean(variantError)}
              title={
                variantError ? "Load variants before editing" : "Edit this product"
              }
              onClick={() => setIsEditing(true)}
            >
              Edit Product
            </button>
            <button
              ref={closeButtonRef}
              type="button"
              className="btn btn-circle btn-ghost text-lg font-bold"
              aria-label="Close product details"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
        </header>

        <main className="flex flex-col gap-6 overflow-y-auto p-6">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              { label: "Cover Image", url: product.imageURL },
              { label: "Small / Cart Image", url: product.productImageUrl },
            ].map(({ label, url }) => (
              <div
                key={label}
                className="overflow-hidden rounded-xl border border-base-200"
              >
                <div className="border-b border-base-200 bg-base-200/50 px-3 py-2 text-xs font-bold uppercase">
                  {label}
                </div>
                <ProductImage src={url} alt={`${product.name} ${label}`} />
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 gap-4 rounded-xl bg-base-200/40 p-4 sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase text-base-content/50">
                Base Price
              </p>
              <p className="mt-1 text-xl font-bold">
                {formatCurrency(product.basePrice)}
              </p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs font-bold uppercase text-base-content/50">
                Description
              </p>
              <p className="mt-1 whitespace-pre-wrap text-sm">
                {product.description || "No description provided."}
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-bold">Attributes</h3>
            {product.attributes?.length ? (
              <div className="flex flex-wrap gap-2">
                {product.attributes.map((attribute, index) => (
                  <span
                    key={`${String(attribute)}-${index}`}
                    className="badge badge-outline"
                  >
                    {String(attribute)}
                  </span>
                ))}
              </div>
            ) : (
              <p className="rounded-lg border border-dashed p-3 text-sm text-base-content/50">
                No attributes.
              </p>
            )}
          </section>

          <section className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h3 className="font-bold">Variants &amp; Stock</h3>
              {!isLoadingVariants && !variantError && (
                <span className="text-xs text-base-content/50">
                  {variants.length} variant(s)
                </span>
              )}
            </div>
            {isLoadingVariants ? (
              <div className="flex justify-center rounded-xl border p-6">
                <span className="loading loading-spinner loading-md text-primary" />
              </div>
            ) : variantError ? (
              <div className="alert alert-error text-sm">
                <span>{variantError}</span>
                <button
                  type="button"
                  className="btn btn-sm"
                  onClick={() => void fetchVariants()}
                >
                  Retry
                </button>
              </div>
            ) : variants.length === 0 ? (
              <p className="rounded-lg border border-dashed p-3 text-sm text-base-content/50">
                No variants.
              </p>
            ) : (
              <div className="overflow-x-auto rounded-xl border">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Variant</th>
                      <th>Modifier</th>
                      <th>Selling Price</th>
                      <th>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {variants.map((variant) => (
                      <tr key={variant.id}>
                        <td>{variant.name}</td>
                        <td>{formatModifier(variant.priceModifier)}</td>
                        <td>
                          {formatCurrency(
                            product.basePrice + variant.priceModifier,
                          )}
                        </td>
                        <td>{variant.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          <section className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h3 className="font-bold">Additional Images</h3>
              <span className="text-xs text-base-content/50">
                {product.additionalImages?.length || 0} image(s)
              </span>
            </div>
            {product.additionalImages?.length ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {product.additionalImages.map((url, index) => (
                  <div
                    key={`${url}-${index}`}
                    className="overflow-hidden rounded-xl border"
                  >
                    <ProductImage
                      src={url}
                      alt={`Additional image ${index + 1}`}
                      className="aspect-square w-full"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="rounded-lg border border-dashed p-3 text-sm text-base-content/50">
                No additional images.
              </p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
