import React, { useState } from "react";
import CreateNewVariant from "../components/CreateNewVariant";
import { StoreItemVariantType } from "@pos-dashboard/shared";

interface CreateNewProductModal {
  onClose: () => void;
}

const CreateNewProductModal: React.FC<CreateNewProductModal> = ({
  onClose,
}) => {
  const [variants, setVariants] = useState<StoreItemVariantType[]>([]);

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
    if (false) {
      //setShowConfirmExit(true);
    } else {
      onClose();
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 animate-fade-in">
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
            onClick={handleAttemptClose}
            className="btn btn-circle btn-ghost text-base-content/70 hover:bg-base-200 font-bold text-lg"
            aria-label="Close modal"
          >✕</button>
        </div>
        <form className="flex flex-col gap-2 w-full">
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Product Name</legend>
                <input type="text" className="input w-full" placeholder="Enter Product Name" />
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Product Description</legend>
                <textarea className="textarea w-full h-24" placeholder="Enter Description Here"></textarea>
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Set Product Base Price</legend>
                <input
                type="number"
                className="input w-full"
                placeholder="Enter Base Price"
                min="0"
                title="Set Product Base Price"
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
                <input type="file" className="file-input w-full" accept="image/jpeg, image/png" />
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Choose Small Product Image</legend>
                <input type="file" className="file-input w-full" accept="image/jpeg, image/png" />
                <label className="label text-wrap">Smaller square image used to display product in shopping cart etc</label>
            </fieldset>
            <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Upload Additional Product Images</legend>
                <input type="file" className="file-input w-full" accept="image/jpeg, image/png" multiple/>
                <label className="label">Optional, Upload Multiple, Displayed in Image Carousel</label>
            </fieldset>
            <div className="flex flex-col-reverse gap-2 w-full sm:flex-row">
              <button className="btn btn-outline sm:basis-1/3">Cancel</button>
              <button className="btn btn-outline sm:basis-2/3">Create New Product</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewProductModal;
