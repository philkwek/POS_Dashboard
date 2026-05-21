import React from 'react';
import CartItem from '../components/CartItem';

const Cart: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-10">
        <div className="flex flex-col w-full justify-start sm:justify-between sm:flex-row gap-2">
            <h1 className="text-4xl font-bold">Shopping Cart 🛒</h1>
            <button className="underline w-fit cursor-pointer">Continue Shopping</button>
        </div>
        <CartItem></CartItem>
    </div>
  );
};

export default Cart;