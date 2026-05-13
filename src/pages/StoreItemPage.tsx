import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { StoreItemType } from "@pos-dashboard/shared";
import "../App.css";

import StoreItemFocus from "../components/StoreItemFocus";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Dock from "../components/Dock";
import { useAuth } from "../context/AuthContext";

/**
 * StoreItemPage Component: Displays detailed information for a single product.
 * Handles both direct URL access and in-memory state passing.
 */
function StoreItemPage() {
  const { productId } = useParams<{ productId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  // Try to get the product from location state first
  const [product, setProduct] = useState<StoreItemType | null>(
    location.state?.product || null
  );
  const [loading, setLoading] = useState(!product);
  const [loginVisible, setLoginVisible] = useState(false);

  // Toggles the login modal visibility
  const adminLoginOnClick = () => {
    setLoginVisible(!loginVisible);
  };

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
    <div className="flex flex-col m-4 relative">
      {/* Navigation Header */}
      <Navbar onAdminLoginClick={adminLoginOnClick} />

      <div className="m-4">
        <button className="btn btn-outline mb-4" onClick={() => navigate("/")}>
          ← Back to Store
        </button>

        {loading ? (
          <div className="p-10 text-center">Loading product...</div>
        ) : product ? (
          <div className="max-w-2xl mx-auto">
            <StoreItemFocus item={product} />
          </div>
        ) : (
          <div className="p-10 text-center text-error">Product not found.</div>
        )}
      </div>

      {/* Conditional Login Overlay */}
      {loginVisible && <Login adminLoginOnClick={adminLoginOnClick} />}

      {/* Footer Navigation for Admin */}
      {user !== null && <Dock />}
    </div>
  );
}

export default StoreItemPage;
