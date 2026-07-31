import React from 'react';
import CreateNewProductModal from '../components/CreateNewProductModal';

const Products: React.FC = () => {
  function createNewProductModalOnClick() {
    
  }

  return (
    <div className="flex h-full w-full flex-col p-5 pt-1 gap-2">
      <div>
        <h1 className="text-4xl font-bold">Products & Inventory</h1>
        <p className="opacity-70">Create, Update and Delete Products</p>
      </div>
      <div className="flex flex-row justify-end">
        <button className="btn btn-outline">+ Create New Product</button>
      </div>
      <CreateNewProductModal onClose={createNewProductModalOnClick} />
    </div>
  );
};

export default Products;
