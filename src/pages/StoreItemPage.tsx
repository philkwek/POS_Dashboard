import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { StoreItemType, StoreItemVariantType } from "@pos-dashboard/shared";
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
  const [variants, setVariants] = useState<StoreItemVariantType[]>([]);

  // Inputs for Product
  const [quantityInput, setQuantityInput] = useState<number>(1);
  const [variantInput, setVariantInput] = useState<string>("");

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

  const onAddToCartOnClick = () => {
    console.log("Adding to cart:", {
      productId: product?.id,
      productName: product?.name,
      variant: variantInput,
      quantity: quantityInput,
      totalPrice:
        (Number(product?.basePrice) +
          (variants.find((v) => v.name === variantInput)?.priceModifier || 0)) *
        Number(quantityInput),
    });
    alert(
      `Added ${quantityInput} x ${product?.name} (${variantInput || "No variant"}) to cart!`,
    );
  };

  // Fetch product from Firestore if not passed in stateg
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

  // Fetch variants subcollection
  useEffect(() => {
    const fetchVariants = async () => {
      const idToFetch = product?.id || productId;
      if (!idToFetch) return;

      try {
        const variantsRef = collection(db, "products", idToFetch, "variants");
        const snapshot = await getDocs(variantsRef);
        const variantsData = snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as unknown as StoreItemVariantType,
        );
        setVariants(variantsData);
      } catch (error) {
        console.error("Error fetching variants: ", error);
      }
    };

    fetchVariants();
  }, [product?.id, productId]);

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
                {allImages.map((image, index) => (
                  <div
                    key={index}
                    id={`slide-${index}`}
                    className="carousel-item relative w-full"
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
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 basis-1/2">
              <h1 className="card-title text-xl uppercase">{product.name}</h1>
              <h1 className="text-base">{"$" + product.basePrice}</h1>
              <p>{product.description}</p>
              {variants.length > 0 && (
                <select
                  className="select mt-1 select-bordered w-full justify-self-stretch"
                  value={variantInput}
                  onChange={(e) => setVariantInput(e.target.value)}
                >
                  <option value="" disabled={true}>
                    Variants
                  </option>
                  {variants.map((variant, index) => (
                    <option key={index} value={variant.name}>
                      {variant.name}{" "}
                      {variant.priceModifier
                        ? `(+$${variant.priceModifier})`
                        : ""}
                    </option>
                  ))}
                </select>
              )}
              <div className="flex flex-col">
                <input
                  type="number"
                  className="input validator justify-self-stretch w-full"
                  required
                  placeholder="Quantity"
                  min="1"
                  max="10"
                  value={quantityInput.toString()}
                  onChange={(e) =>
                    setQuantityInput(parseInt(e.target.value) || 1)
                  }
                  title="Must be between be 1 to 10"
                />
              </div>
              <button
                className="btn btn-lg flex flex-row gap-2 btn-primary"
                onClick={onAddToCartOnClick}
                disabled={variants.length > 0 && !variantInput}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                Add to Cart
              </button>
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
