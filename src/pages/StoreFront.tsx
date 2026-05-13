import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { StoreItemType } from "@pos-dashboard/shared";
import "../App.css";

import StoreItem from "../components/StoreItem";
import DrawerLayout from "../components/DrawerLayout";

/**
 * StoreFront Component: The main customer-facing landing page.
 * Displays a grid of products fetched from Firestore.
 */
function StoreFront() {
  // State for storing the list of products from the database
  const [products, setProducts] = useState<StoreItemType[]>([]);
  // State to track if the data is still being loaded
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();

  // Opens specific product page
  const storeItemOnClick = (item: StoreItemType) => {
    navigate(`/${item.id}`, { state: { product: item } });
  };

  // Fetch products from Firestore on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        // Map Firestore documents to our shared StoreItemType
        const productsData = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as StoreItemType,
        );
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <DrawerLayout>
      <div className="flex flex-col relative m-4">
        {/* Main Product Grid */}
        {loading ? (
          <div className="p-10 text-center">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <StoreItem
                key={product.id}
                item={product}
                storeItemOnClick={() => storeItemOnClick(product)}
              />
            ))}
          </div>
        )}
      </div>
    </DrawerLayout>
  );
}

export default StoreFront;
