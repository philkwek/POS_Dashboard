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
  const stateProduct = location.state?.product as StoreItemType | undefined;
  const hasMatchingStateProduct = !!(stateProduct && stateProduct.id === productId);

  // Prefer route-state product when it matches this route
  const [product, setProduct] = useState<StoreItemType | null>(
    hasMatchingStateProduct ? stateProduct : null,
  );
  const [loading, setLoading] = useState(!hasMatchingStateProduct);

  const allImages = product
    ? [product.imageURL, ...(product.additionalImages || [])]
    : [];

  const scrollToSlide = (index: number) => {
    const element = document.getElementById(`slide-${index}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  // Fetch product from Firestore if not passed in state
  useEffect(() => {
    let mounted = true;

    const fetchProduct = async () => {
      if (!productId) {
        if (mounted) {
          setProduct(null);
          setLoading(false);
        }
        return;
      }

      if (stateProduct && stateProduct.id === productId) {
        if (mounted) {
          setProduct(stateProduct);
          setLoading(false);
        }
        return;
      }

      if (mounted) {
        setProduct(null);
        setLoading(true);
      }

      try {
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);

        if (!mounted) return;

        if (docSnap.exists()) {
          setProduct({
            id: docSnap.id,
            ...docSnap.data(),
          } as StoreItemType);
        } else {
          setProduct(null);
          console.error("No such product!");
        }
      } catch (error) {
        if (mounted) {
          setProduct(null);
          console.error("Error fetching product: ", error);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchProduct();

    return () => {
      mounted = false;
    };
  }, [productId, stateProduct]);

  return (
    <div className="flex flex-col relative">
      <div className="m-4">
        <button className="btn btn-outline mb-4" onClick={() => navigate("/")} data-cy="back-to-store">
          ← Back to Store
        </button>

        {loading ? (
          <div className="p-10 text-center" data-cy="product-loading">Loading product...</div>
        ) : product ? (
          <div className="flex flex-col md:flex-row gap-4" data-cy="product-detail">
            <div className="flex flex-col basis-1/2">
              <div className="carousel w-full rounded-2xl" data-cy="product-carousel">
                {allImages.map((image, index) => (
                  <div
                    key={index}
                    id={`slide-${index}`}
                    className="carousel-item relative w-full"
                    data-cy={`product-slide-${index}`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full"
                    />
                    {allImages.length > 1 && (
                      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button
                          onClick={() =>
                            scrollToSlide(
                              index === 0 ? allImages.length - 1 : index - 1,
                            )
                          }
                          className="btn btn-circle"
                          data-cy="carousel-prev"
                        >
                          ❮
                        </button>
                        <button
                          onClick={() =>
                            scrollToSlide(
                              index === allImages.length - 1 ? 0 : index + 1,
                            )
                          }
                          className="btn btn-circle"
                          data-cy="carousel-next"
                        >
                          ❯
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {allImages.length > 1 && (
                <div className="flex w-full justify-center gap-2 py-2">
                  {allImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSlide(index)}
                      className="btn btn-md rounded-xl"
                      data-cy={`carousel-index-${index}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col basis-1/2">
              <h1 className="card-title" data-cy="product-name">{product.name}</h1>
              <p data-cy="product-description">{product.description}</p>
            </div>
          </div>
        ) : (
          <div className="p-10 text-center text-error" data-cy="product-not-found">Product not found.</div>
        )}
      </div>
    </div>
  );
}

export default StoreItemPage;
