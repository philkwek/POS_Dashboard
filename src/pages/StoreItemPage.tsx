import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { StoreItemType } from "@pos-dashboard/shared";
import "../App.css";

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
    location.state?.product || null,
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
    <div className="flex flex-col relative">
      <div className="m-4">
        <button className="btn btn-outline mb-4" onClick={() => navigate("/")}>
          ← Back to Store
        </button>

        {loading ? (
          <div className="p-10 text-center">Loading product...</div>
        ) : product ? (
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col basis-1/2">
              <div className="carousel w-full rounded-2xl">
                <div id="item1" className="carousel-item relative w-full">
                  <img src={product.imageURL} />
                  {product.additionalImages &&
                    product.additionalImages.length > 0 && (
                      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                          href={`#item${1 + product.additionalImages.length}`}
                          className="btn btn-circle"
                        >
                          ❮
                        </a>
                        <a href="#item2" className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    )}
                </div>
                {product.additionalImages?.map((url, index) => {
                  const totalImages = 1 + (product.additionalImages?.length || 0);
                  const prevId = `#item${index + 1}`;
                  const nextId =
                    index + 2 === totalImages ? "#item1" : `#item${index + 3}`;
                  return (
                    <div
                      key={index}
                      id={"item" + (index + 2)}
                      className="carousel-item relative w-full"
                    >
                      <img src={url} />
                      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={prevId} className="btn btn-circle">
                          ❮
                        </a>
                        <a href={nextId} className="btn btn-circle">
                          ❯
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-md rounded-xl">
                  1
                </a>
                {product.additionalImages?.map((_, index) => (
                  <a
                    key={index}
                    href={"#item" + (index + 2)}
                    className="btn btn-md rounded-xl"
                  >
                    {index + 2}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col basis-1/2">
              <h1 className="card-title">{product.name}</h1>
              <p>{product.description}</p>
            </div>
          </div>
        ) : (
          <div className="p-10 text-center text-error">Product not found.</div>
        )}
      </div>
    </div>
  );
}

export default StoreItemPage;
