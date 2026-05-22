import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCartStore } from "../store/useCartStore";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, clearCart } = useCartStore();

  const subtotal = items.reduce((acc, cartItem) => {
    const priceModifier = cartItem.item.selectedVariant?.priceModifier || 0;
    return acc + (cartItem.item.basePrice + priceModifier) * cartItem.quantity;
  }, 0);

  const shipping = subtotal > 50 ? 0 : 4.99;
  const tax = subtotal * 0.0825; // 8.25% tax
  const total = subtotal + shipping + tax;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "SGD",
    }).format(val);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
        <div className="max-w-md text-center flex flex-col items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-base-200 flex items-center justify-center text-base-content/40 shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-base-content">Your cart is empty</h2>
            <p className="text-sm text-base-content/50 mt-2">
              Looks like you haven't added any products to your cart yet.
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary rounded-xl px-6 font-semibold"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-50 p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col gap-6">
        {/* Navigation & Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-base-200">
          <div>
            <h1 className="text-3xl font-extrabold text-base-content tracking-tight flex items-center gap-2">
              Shopping Cart 🛒
            </h1>
            <p className="text-xs sm:text-sm text-base-content/50 mt-1">
              Manage your selected items and review your order summary
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-ghost btn-sm w-fit font-semibold text-primary hover:bg-primary/10 transition-colors"
          >
            ← Continue Shopping
          </button>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Cart Items List */}
          <div className="flex-1 w-full flex flex-col gap-4">
            {items.map((cartItem) => {
              const priceModifier = cartItem.item.selectedVariant?.priceModifier || 0;
              const totalPrice = (cartItem.item.basePrice + priceModifier) * cartItem.quantity;
              return (
                <CartItem
                  key={`${cartItem.item.id}-${cartItem.item.selectedVariant?.name || "default"}`}
                  productName={cartItem.item.name}
                  variant={cartItem.item.selectedVariant?.name}
                  quantity={cartItem.quantity}
                  totalPrice={totalPrice}
                  productImageURL={cartItem.item.productImageURL}
                  onQuantityChange={(newQty) =>
                    updateQuantity(cartItem.item.id, cartItem.item.selectedVariant?.name, newQty)
                  }
                  onRemove={() => removeItem(cartItem.item.id, cartItem.item.selectedVariant?.name)}
                />
              );
            })}

            {/* Clear Cart Button */}
            <div className="flex justify-end mt-2">
              <button
                onClick={clearCart}
                className="btn btn-outline btn-error btn-sm rounded-lg"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary Card */}
          <div className="w-full lg:w-96 card bg-base-100 shadow-sm border border-base-200 p-6 rounded-2xl flex flex-col gap-4">
            <h2 className="text-xl font-bold text-base-content border-b border-base-100 pb-2">
              Order Summary
            </h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between text-base-content/65">
                <span>Subtotal</span>
                <span className="font-semibold">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-base-content/65">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-success font-semibold">Free</span>
                  ) : (
                    formatCurrency(shipping)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base-content/65">
                <span>Estimated Tax (8.25%)</span>
                <span>{formatCurrency(tax)}</span>
              </div>

              <div className="border-t border-base-200 my-2"></div>

              <div className="flex justify-between text-base sm:text-lg font-extrabold text-base-content">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>

            <button
              onClick={() => alert("Mock checkout process completed! Thank you for your order! 🎉")}
              className="btn btn-primary btn-block btn-lg mt-4 rounded-xl font-bold shadow-md shadow-primary/20 hover:scale-[1.02] transition-transform duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;