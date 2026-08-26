import React, { useCallback, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { StoreItemType } from "@pos-dashboard/shared";
import CreateNewProductModal from "../components/CreateNewProductModal";
import { db } from "../firebase";

const Products: React.FC = () => {
  const [products, setProducts] = useState<StoreItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setLoadError(null);
    try {
      const snapshot = await getDocs(collection(db, "products"));
      setProducts(snapshot.docs.map((productDoc) => ({
        id: productDoc.id,
        ...productDoc.data(),
      }) as StoreItemType));
    } catch (error) {
      console.error("Failed to load products:", error);
      setLoadError("Failed to load products. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchProducts();
  }, [fetchProducts]);

  const handleProductCreated = (product: StoreItemType) => {
    setProducts((currentProducts) => [product, ...currentProducts]);
  };

  return (
    <div className="flex h-full w-full flex-col gap-4 p-5 pt-1">
      <div>
        <h1 className="text-4xl font-bold">Products &amp; Inventory</h1>
        <p className="opacity-70">Create, Update and Delete Products</p>
      </div>

      <div className="flex justify-end">
        <button onClick={() => setIsModalOpen(true)} className="btn btn-outline">
          + Create New Product
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center p-10"><span className="loading loading-spinner loading-lg text-primary" /></div>
      ) : loadError ? (
        <div className="alert alert-error"><span>{loadError}</span><button className="btn btn-sm" onClick={() => void fetchProducts()}>Retry</button></div>
      ) : products.length === 0 ? (
        <div className="rounded-lg border border-dashed border-base-300 p-10 text-center text-base-content/60">No products found.</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="card border border-base-200 bg-base-100 shadow-sm">
              <figure className="aspect-video bg-base-200"><img src={product.imageURL} alt={product.name} className="h-full w-full object-cover" /></figure>
              <div className="card-body gap-2 p-4">
                <div className="flex items-start justify-between gap-2"><h2 className="card-title">{product.name}</h2><span className={`badge ${product.isActive ? "badge-success" : "badge-ghost"}`}>{product.isActive ? "Active" : "Inactive"}</span></div>
                <p className="text-sm text-base-content/70">${product.basePrice.toFixed(2)}</p>
                <p className="text-xs text-base-content/60">{product.variants?.length || 0} variant(s)</p>
              </div>
            </article>
          ))}
        </div>
      )}

      {isModalOpen && <CreateNewProductModal onClose={() => setIsModalOpen(false)} onCreated={handleProductCreated} />}
    </div>
  );
};

export default Products;
