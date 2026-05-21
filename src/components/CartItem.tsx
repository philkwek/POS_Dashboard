import React from 'react';

export interface CartItemProps {
  /** The name of the product */
  productName: string;
  
  /** The specific variant of the product selected (e.g. "Size: L", "Color: Blue") */
  variant?: string;
  
  /** The current quantity in the cart */
  quantity: number;
  
  /** The total price for this cart item (quantity * item price) */
  totalPrice: number;
  
  /** Optional URL of the product image */
  productImageURL?: string;
  
  /** Optional callback triggered when the quantity is updated (+ or - clicked) */
  onQuantityChange?: (newQuantity: number) => void;
  
  /** Optional callback triggered when the remove button is clicked */
  onRemove?: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  productName,
  variant,
  quantity,
  totalPrice,
  productImageURL,
  onQuantityChange,
  onRemove,
}) => {
  // Format price helper
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalPrice);

  const handleDecrement = () => {
    if (onQuantityChange && quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (onQuantityChange) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-all duration-300 w-full max-w-3xl p-3 sm:p-4 gap-3 sm:gap-4 items-center">
      {/* Product Image / Fallback Placeholder */}
      <figure className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-base-200 rounded-xl overflow-hidden relative group">
        {productImageURL ? (
          <img
            src={productImageURL}
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
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25-3v13.5m0-13.5L10.5 5.25M12 4.5l1.5.75M21.75 7.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 7.5g"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5a3 3 0 11-6 0M4.5 7.5L6.622 18.132a2.25 2.25 0 002.247 2.118h6.262a2.25 2.25 0 002.247-2.118L19.5 7.5M4.5 7.5h15"
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

        {/* Quantity control, price, and actions */}
        <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 flex-shrink-0">
          {/* Quantity Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-base-content/50 uppercase tracking-wider hidden md:inline">Qty</span>
            <div className="join border border-base-300 rounded-lg overflow-hidden bg-base-100 shadow-xs">
              <button
                type="button"
                onClick={handleDecrement}
                disabled={!onQuantityChange || quantity <= 1}
                className="btn btn-square btn-xs sm:btn-sm btn-ghost join-item font-bold disabled:opacity-30 disabled:bg-transparent"
                aria-label="Decrease quantity"
              >
                —
              </button>
              <span className="w-8 sm:w-10 text-center text-xs sm:text-sm font-semibold flex items-center justify-center select-none join-item bg-base-50 text-base-content border-x border-base-200">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrement}
                disabled={!onQuantityChange}
                className="btn btn-square btn-xs sm:btn-sm btn-ghost join-item font-bold disabled:opacity-30 disabled:bg-transparent"
                aria-label="Increase quantity"
              >
                ＋
              </button>
            </div>
          </div>

          {/* Pricing & Actions Section */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            {/* Total Price */}
            <div className="text-right min-w-[70px] sm:min-w-[90px]">
              <span className="text-xs text-base-content/40 block font-medium">Total</span>
              <span className="text-base sm:text-lg font-extrabold tracking-tight">
                {formattedPrice}
              </span>
            </div>

            {/* Remove Button */}
            {onRemove && (
              <button
                type="button"
                onClick={onRemove}
                className="btn btn-ghost btn-circle btn-xs sm:btn-sm text-error hover:bg-error/10 hover:text-error-active focus:outline-hidden transition-all duration-200"
                aria-label={`Remove ${productName} from cart`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="size-4 sm:size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;