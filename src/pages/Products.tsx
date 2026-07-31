import React, { useState } from 'react';
import CreateNewProductModal from '../components/CreateNewProductModal';

const Products: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex h-full w-full flex-col p-5 pt-1 gap-2">
      <div>
        <h1 className="text-4xl font-bold">Products & Inventory</h1>
        <p className="opacity-70">Create, Update and Delete Products</p>
      </div>
      <div className="flex flex-row justify-end">
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-outline"
        >
          + Create New Product
        </button>
      </div>
      {isModalOpen && (
        <CreateNewProductModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Products;
