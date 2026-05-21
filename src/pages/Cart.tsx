import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-50 p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-3xl flex flex-col gap-6">
        
        {/* Navigation & Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center pb-3">
          <div>
            <h1 className="text-3xl font-extrabold text-base-content tracking-tight flex items-center gap-2">
              Shopping Cart 🛒
            </h1>
          </div>
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-ghost btn-sm w-fit font-semibold"
          >
            ← Continue Shopping
          </button>
        </div>

        {/* Simplified Cart Render of the Reusable Component */}
        <div className="flex flex-col gap-4">
          <CartItem
            productName="Sample Product"
            variant="Default Option"
            quantity={1}
            totalPrice={29.99}
            // productImageURL is omitted to display the clean placeholder SVG fallback
            onQuantityChange={(newQty) => console.log('Quantity changed:', newQty)}
            onRemove={() => console.log('Remove item clicked')}
          />
        </div>

      </div>
    </div>
  );
};

export default Cart;