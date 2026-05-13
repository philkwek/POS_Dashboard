import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { StoreItemType } from "@pos-dashboard/shared";
import "../App.css";

import DrawerLayout from "../components/DrawerLayout";

/**
 * StoreItemPage Component: Displays detailed information for a single product.
 * Handles both direct URL access and in-memory state passing.
 */
function StoreItemPage() {
  const { productId } = useParams<{ productId: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // Try to get the product from location state first
  const [product, setProduct] = useState<StoreItemType | null>(
    location.state?.product || null
  );
  const [loading, setLoading] = useState(!product);

  // Fetch product from Firestore if not passed in state
  useEffect(() => {
    const fetchProduct = async () => {
      if (!product && productId) {
        try {
          const docRef = doc(db, "products", productId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setProduct({
              id: docSnap.id,
              ...docSnap.data(),
            } as StoreItemType);
          } else {
            console.error("No such product!");
          }
        } catch (error) {
          console.error("Error fetching product: ", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProduct();
  }, [productId, product]);

  return (
    <DrawerLayout>
      <div className="flex flex-col relative">
        <div className="m-4">
          <button className="btn btn-outline mb-4" onClick={() => navigate("/")}>
            ← Back to Store
          </button>

          {loading ? (
            <div className="p-10 text-center">Loading product...</div>
          ) : product ? (
            <div className="max-w-2xl mx-auto">
              <div className="card bg-base-100 shadow-sm">
                <figure>
                  <img src={product.imageURL} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-10 text-center text-error">Product not found.</div>
          )}
        </div>
      </div>
    </DrawerLayout>
  );
}

export default StoreItemPage;
