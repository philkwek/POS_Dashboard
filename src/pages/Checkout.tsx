import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import CheckoutOrderItem from "../components/CheckoutOrderItem";

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items } = useCartStore();

  return (
    <div className="min-h-screen bg-base-50 p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col gap-6">
        {/* Navigation & Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-base-200">
          <div>
            <h1 className="text-3xl font-extrabold text-base-content tracking-tight flex items-center gap-2">
              Checkout💰
            </h1>
            <p className="text-xs sm:text-sm text-base-content/50 mt-1">
              Confirm your details for order confirmation
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-ghost btn-sm w-fit font-semibold text-primary hover:bg-primary/10 transition-colors"
          >
            ← Exit Checkout
          </button>
        </div>

        {/* Content Layout */}
        <div className="card flex flex-col bg-base-100 border border-base-200">
          {items.map((cartItem) => (
            <CheckoutOrderItem
              key={`${cartItem.item.id}-${cartItem.item.selectedVariant?.name || "default"}`}
              cartItem={cartItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
