import React from "react";
import { StoreItemVariantType } from "@pos-dashboard/shared";

interface CreateNewVariantProps {
  index: number;
  variant: StoreItemVariantType;
  onChange: (updated: StoreItemVariantType) => void;
  onClose?: () => void;
}

const CreateNewVariant: React.FC<CreateNewVariantProps> = ({
  index,
  variant,
  onChange,
  onClose,
}) => {
  return (
    <div className="card border p-3 flex flex-col gap-2 relative w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Variant #{index + 1}</h1>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="btn btn-ghost btn-xs btn-circle text-error hover:bg-error/10"
            title="Remove this variant"
            aria-label="Remove variant"
          >
            ✕
          </button>
        )}
      </div>

      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Set Variant Name</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter Variant Name"
          value={variant.name}
          onChange={(e) => onChange({ ...variant, name: e.target.value })}
        />
      </fieldset>

      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Set Price Modifier</legend>
        <input
          type="number"
          className="input w-full"
          placeholder="Enter Price Difference"
          value={variant.priceModifier || ""}
          onChange={(e) =>
            onChange({
              ...variant,
              priceModifier: parseFloat(e.target.value) || 0,
            })
          }
        />
        <label className="label">Set price difference from product base price</label>
      </fieldset>

      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Set Starting Stock Count</legend>
        <input
          type="number"
          className="input w-full"
          min="0"
          placeholder="Enter Stock Count"
          value={variant.stock || ""}
          onChange={(e) =>
            onChange({
              ...variant,
              stock: parseInt(e.target.value, 10) || 0,
            })
          }
        />
      </fieldset>
    </div>
  );
};

export default CreateNewVariant;
