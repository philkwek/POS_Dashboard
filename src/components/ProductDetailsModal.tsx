import React, { useCallback, useEffect, useRef, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { StoreItemType, StoreItemVariantType } from "@pos-dashboard/shared";
import { db } from "../firebase";

interface ProductDetailsModalProps {
  product: StoreItemType;
  onClose: () => void;
}

interface ProductImageProps {
  src?: string;
  alt: string;
  className?: string;
}

const formatCurrency = (value: number) =>
  Number.isFinite(value) ? `$${value.toFixed(2)}` : "—";

const formatPriceModifier = (value: number) => {
  if (!Number.isFinite(value)) return "—";
  if (value > 0) return `+$${value.toFixed(2)}`;
  if (value < 0) return `-$${Math.abs(value).toFixed(2)}`;
  return "$0.00";
};

const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className = "h-48 w-full",
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (!src || hasError) {
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
      onError={() => setHasError(true)}
    />
  );
};

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
}) => {
  const [variants, setVariants] = useState<StoreItemVariantType[]>([]);
  const [isLoadingVariants, setIsLoadingVariants] = useState(true);
  const [variantError, setVariantError] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const fetchVariants = useCallback(async () => {
    setIsLoadingVariants(true);
    setVariantError(null);

    try {
      const snapshot = await getDocs(
        collection(db, "products", product.id, "variants"),
      );
      setVariants(
        snapshot.docs.map(
          (variantDoc) =>
            ({
              id: variantDoc.id,
              ...variantDoc.data(),
            }) as StoreItemVariantType,
        ),
      );
    } catch (error) {
      console.error("Failed to load product variants:", error);
      setVariantError("Failed to load variants and stock. Please try again.");
    } finally {
      setIsLoadingVariants(false);
    }
  }, [product.id]);

  useEffect(() => {
    void fetchVariants();
  }, [fetchVariants]);

  useEffect(() => {
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
  }, [onClose]);

  const attributes = product.attributes || [];
  const additionalImages = product.additionalImages || [];

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
        aria-describedby="product-details-description"
      >
        <div className="flex items-start justify-between border-b border-base-200 p-6 pb-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2
                id="product-details-title"
                className="truncate text-xl font-extrabold text-base-content sm:text-2xl"
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
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="btn btn-circle btn-ghost text-lg font-bold"
            aria-label="Close product details"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 overflow-y-auto p-6">
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-base-200">
              <div className="border-b border-base-200 bg-base-200/50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-base-content/60">
                Cover Image
              </div>
              <ProductImage
                src={product.imageURL}
                alt={`${product.name} cover`}
                className="aspect-video w-full"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-base-200">
              <div className="border-b border-base-200 bg-base-200/50 px-3 py-2 text-xs font-bold uppercase tracking-wide text-base-content/60">
                Small / Cart Image
              </div>
              <ProductImage
                src={product.productImageUrl}
                alt={`${product.name} small product`}
                className="aspect-video w-full"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 rounded-xl bg-base-200/40 p-4 sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-base-content/50">
                Base Price
              </p>
              <p className="mt-1 text-xl font-bold">
                {formatCurrency(product.basePrice)}
              </p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs font-bold uppercase tracking-wide text-base-content/50">
                Description
              </p>
              <p
                id="product-details-description"
                className="mt-1 whitespace-pre-wrap text-sm text-base-content/80"
              >
                {product.description || "No description provided."}
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-2">
            <h3 className="font-bold text-base-content">Attributes</h3>
            {attributes.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {attributes.map((attribute, index) => (
                  <span key={`${String(attribute)}-${index}`} className="badge badge-outline">
                    {String(attribute)}
                  </span>
                ))}
              </div>
            ) : (
              <p className="rounded-lg border border-dashed border-base-300 p-3 text-sm text-base-content/50">
                No attributes.
              </p>
            )}
          </section>

          <section className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-bold text-base-content">Variants &amp; Stock</h3>
              {!isLoadingVariants && !variantError && (
                <span className="text-xs text-base-content/50">
                  {variants.length} variant(s)
                </span>
              )}
            </div>

            {isLoadingVariants ? (
              <div className="flex justify-center rounded-xl border border-base-200 p-6">
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
              <p className="rounded-lg border border-dashed border-base-300 p-3 text-sm text-base-content/50">
                No variants.
              </p>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-base-200">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Variant</th>
                      <th>Price Modifier</th>
                      <th>Selling Price</th>
                      <th>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {variants.map((variant, index) => (
                      <tr key={variant.id || `${variant.name}-${index}`}>
                        <td className="font-semibold">{variant.name}</td>
                        <td className="font-mono">
                          {formatPriceModifier(variant.priceModifier)}
                        </td>
                        <td className="font-mono">
                          {formatCurrency(
                            product.basePrice + variant.priceModifier,
                          )}
                        </td>
                        <td>
                          <span
                            className={`badge ${variant.stock > 0 ? "badge-success badge-outline" : "badge-error badge-outline"}`}
                          >
                            {variant.stock}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>

          <section className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-bold text-base-content">Additional Images</h3>
              <span className="text-xs text-base-content/50">
                {additionalImages.length} image(s)
              </span>
            </div>
            {additionalImages.length > 0 ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {additionalImages.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className="overflow-hidden rounded-xl border border-base-200"
                  >
                    <ProductImage
                      src={image}
                      alt={`${product.name} additional image ${index + 1}`}
                      className="aspect-square w-full"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="rounded-lg border border-dashed border-base-300 p-3 text-sm text-base-content/50">
                No additional images.
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
