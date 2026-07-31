import React, { useState, useEffect } from "react";
import CreateNewVariant from "../components/CreateNewVariant";
import { StoreItemVariantType } from "@pos-dashboard/shared";

interface CreateNewProductModal {
  onClose: () => void;
}

const CreateNewProductModal: React.FC<CreateNewProductModal> = ({
  onClose,
}) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [hasCoverImage, setHasCoverImage] = useState(false);
  const [hasSmallImage, setHasSmallImage] = useState(false);
  const [hasAdditionalImages, setHasAdditionalImages] = useState(false);
  const [variants, setVariants] = useState<StoreItemVariantType[]>([]);
  const [showConfirmExit, setShowConfirmExit] = useState(false);

  const isFormDirty =
    productName.trim() !== "" ||
    productDescription.trim() !== "" ||
    basePrice.trim() !== "" ||
    variants.length > 0 ||
    hasCoverImage ||
    hasSmallImage ||
    hasAdditionalImages;

  const handleAddVariant = () => {
    setVariants((prev) => [...prev, { name: "", priceModifier: 0, stock: 0 }]);
  };

  const handleRemoveLastVariant = () => {
    setVariants((prev) => prev.slice(0, -1));
  };

  const handleRemoveVariantAtIndex = (index: number) => {
    setVariants((prev) => prev.filter((_, i) => i !== index));
  };

  const handleVariantChange = (
    index: number,
    updated: StoreItemVariantType
  ) => {
    setVariants((prev) => prev.map((v, i) => (i === index ? updated : v)));
  };

  const handleAttemptClose = () => {
    if (isFormDirty) {
      setShowConfirmExit(true);
    } else {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showConfirmExit) {
          setShowConfirmExit(false);
        } else {
          handleAttemptClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFormDirty, showConfirmExit]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 animate-fade-in bg-black/40"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleAttemptClose();
      }}
    >
      <div className="bg-base-100 border border-base-200 shadow-2xl rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto relative p-6 flex flex-col gap-2">
        {/* Top Bar: Title & X Exit Button */}
        <div className="flex justify-between items-start pb-3 border-b border-base-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-base-content">
              Create New Product
            </h2>
            <p className="text-xs text-base-content/60 font-mono mt-0.5"></p>
          </div>
          <button
            type="button"
            onClick={handleAttemptClose}
            className="btn btn-circle btn-ghost text-base-content/70 hover:bg-base-200 font-bold text-lg"
            aria-label="Close modal"
          >✕</button>
        </div>
        <form className="flex flex-col gap-2 w-full" onSubmit={(e) => e.preventDefault()}>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Product Name</legend>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Product Description</legend>
                <textarea
                  className="textarea w-full h-24"
                  placeholder="Enter Description Here"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                ></textarea>
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Set Product Base Price</legend>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="Enter Base Price"
                  min="0"
                  title="Set Product Base Price"
                  value={basePrice}
                  onChange={(e) => setBasePrice(e.target.value)}
                />
            </fieldset>
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Create Variant of Product</legend>
              <div className="flex flex-row gap-3 items-start w-full">
                <div className="flex flex-col gap-2 sticky top-0">
                  <button
                    type="button"
                    onClick={handleAddVariant}
                    className="btn btn-sm btn-outline font-bold"
                    title="Add Variant"
                    aria-label="Add variant"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={handleRemoveLastVariant}
                    disabled={variants.length === 0}
                    className="btn btn-sm btn-outline text-error disabled:opacity-40 font-bold"
                    title="Remove Last Variant"
                    aria-label="Remove last variant"
                  >
                    -
                  </button>
                </div>
                <div className="flex-1 flex flex-col gap-3 w-full">
                  {variants.length === 0 ? (
                    <div className="p-3 border border-dashed border-base-300 rounded-lg text-xs text-base-content/60 text-center w-full">
                      No variants added. Click <span className="font-bold">+</span> to create a variant.
                    </div>
                  ) : (
                    variants.map((variant, idx) => (
                      <CreateNewVariant
                        key={idx}
                        index={idx}
                        variant={variant}
                        onChange={(updated) => handleVariantChange(idx, updated)}
                        onClose={() => handleRemoveVariantAtIndex(idx)}
                      />
                    ))
                  )}
                </div>
              </div>
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Choose Product Cover Image</legend>
                <input
                  type="file"
                  className="file-input w-full"
                  accept="image/jpeg, image/png"
                  onChange={(e) => setHasCoverImage(Boolean(e.target.files && e.target.files.length > 0))}
                />
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Choose Small Product Image</legend>
                <input
                  type="file"
                  className="file-input w-full"
                  accept="image/jpeg, image/png"
                  onChange={(e) => setHasSmallImage(Boolean(e.target.files && e.target.files.length > 0))}
                />
                <label className="label text-wrap">Smaller square image used to display product in shopping cart etc</label>
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Upload Additional Product Images</legend>
                <input
                  type="file"
                  className="file-input w-full"
                  accept="image/jpeg, image/png"
                  multiple
                  onChange={(e) => setHasAdditionalImages(Boolean(e.target.files && e.target.files.length > 0))}
                />
                <label className="label">Optional, Upload Multiple, Displayed in Image Carousel</label>
            </fieldset>
            <div className="flex flex-col-reverse gap-2 w-full sm:flex-row">
              <button
                type="button"
                onClick={handleAttemptClose}
                className="btn btn-outline sm:basis-1/3"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-outline sm:basis-2/3"
              >
                Create New Product
              </button>
            </div>
        </form>
      </div>

      {/* Unsaved Changes Confirmation Modal */}
      {showConfirmExit && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 p-4 animate-fade-in">
          <div className="bg-base-100 border border-base-200 shadow-2xl rounded-2xl p-6 max-w-sm w-full flex flex-col gap-4">
            <h3 className="font-bold text-lg text-error flex items-center gap-2">
              ⚠️ Discard Unsaved Changes?
            </h3>
            <p className="text-sm text-base-content/70">
              You have unsaved product details or variants. Are you sure you want to exit and discard your changes?
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmExit(false)}
                className="btn btn-ghost btn-sm font-semibold"
              >
                Keep Editing
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-error btn-sm font-bold text-white shadow-sm"
              >
                Discard Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewProductModal;
