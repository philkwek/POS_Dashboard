import React from "react";
import { CartItemData } from "../store/useCartStore";

export interface CartItemProps {
  /** The consolidated cart item data containing both product information and quantity */
  cartItem: CartItemData;

  /** Optional callback triggered when the quantity is updated (+ or - clicked) */
  onQuantityChange?: (newQuantity: number) => void;

  /** Optional callback triggered when the remove button is clicked */
  onRemove?: () => void;
}

const CheckoutOrderItem: React.FC<CartItemProps> = ({ cartItem }) => {
  const { item, quantity } = cartItem;
  const priceModifier = item.selectedVariant?.priceModifier || 0;
  const totalPrice = (item.basePrice + priceModifier) * quantity;
  const productImageUrl = item.productImageUrl || item.imageURL;
  const productName = item.name;
  const variant = item.selectedVariant?.name;

  // Format price helper
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice);

  return (
    <div className="card card-side w-full p-2 sm:p-3 gap-1 sm:gap-2 items-center">
      {/* Product Image / Fallback Placeholder */}
      <figure className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-base-200 rounded-xl overflow-hidden relative group">
        {productImageUrl ? (
          <img
            src={productImageUrl}
            alt={productName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-base-content/40 bg-linear-to-tr from-base-200 to-base-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 sm:size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        )}
      </figure>

      {/* Item Details and Controls */}
      <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Name and Variant details */}
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-base sm:text-lg text-base-content truncate hover:text-primary transition-colors cursor-default">
            {productName}
          </h3>
          {variant && (
            <div className="flex flex-wrap gap-1 mt-1">
              <span className="badge badge-neutral badge-sm py-2 px-2.5 font-medium text-xs rounded-md shadow-xs">
                {variant}
              </span>
            </div>
          )}
        </div>

        {/* Qty & Price */}
        <div className="flex items-center justify-end gap-6 sm:gap-8 flex-shrink-0">
          {/* Qty Section */}
          <div className="flex items-center justify-end gap-2 min-w-[4.5rem] sm:min-w-[6rem]">
            <span className="text-xs font-semibold text-base-content/50 uppercase tracking-wider hidden md:inline">
              Qty
            </span>
            <span className="text-base sm:text-lg font-extrabold tracking-tight">
              {quantity}
            </span>
          </div>

          {/* Price Section */}
          <div className="flex items-center justify-end gap-2 min-w-[6.5rem] sm:min-w-[9rem]">
            <span className="text-xs font-semibold text-base-content/50 uppercase tracking-wider hidden md:inline">
              Price
            </span>
            <span className="text-base sm:text-lg font-extrabold tracking-tight">
              {formattedPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOrderItem;
