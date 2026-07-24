import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import CheckoutOrderItem from "../components/CheckoutOrderItem";

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items } = useCartStore();

  const [phone, setPhone] = React.useState("");
  const [phoneTouched, setPhoneTouched] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const getPhoneError = (val: string): string | null => {
    const trimmed = val.trim();
    if (!trimmed) {
      return "Phone number is required";
    }
    if (!/^\d{8}$/.test(trimmed)) {
      return "Phone number must be exactly 8 digits";
    }
    return null;
  };

  const phoneError = getPhoneError(phone);
  const showPhoneError = (phoneTouched || isSubmitted) && phoneError !== null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (phoneError) {
      return;
    }
  };

  const subtotal = items.reduce((acc, cartItem) => {
    const priceModifier = cartItem.item.selectedVariant?.priceModifier || 0;
    return acc + (cartItem.item.basePrice + priceModifier) * cartItem.quantity;
  }, 0);

  const shipping = subtotal > 50 ? 0 : 4.99;
  const total = subtotal + shipping;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "SGD",
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-base-50 p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col gap-6">
        {/* Navigation & Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center pb-3 border-b border-base-200">
          <div>
            <h1 className="text-3xl font-extrabold text-base-content tracking-tight flex items-center gap-2">
              Checkout💰
            </h1>
            <p className="text-xs sm:text-sm text-base-content/50 mt-1">
              Confirm your details for order confirmation
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-ghost btn-sm w-fit font-semibold text-primary hover:bg-primary/10 transition-colors"
          >
            ← Exit Checkout
          </button>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col gap-3">
          <p className="text-xl font-bold">Order Summary</p>
          <div className="card flex flex-col bg-base-100 border border-base-200 p-3">
            {items.map((cartItem) => (
              <CheckoutOrderItem
                key={`${cartItem.item.id}-${cartItem.item.selectedVariant?.name || "default"}`}
                cartItem={cartItem}
              />
            ))}
            {/*Order Summary*/}
            <div className="p-2 border-t-2 border-base-200 items-center mt-3">
              <div className="flex justify-between text-base sm:text-lg font-extrabold text-base-content">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="basis-1/2 flex flex-col gap-3">
              <p className="text-xl font-bold">Your Details</p>
              <div className="sm:w-sm">
                <fieldset className="fieldset w-full">
                  <label className="label" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input w-full"
                    placeholder="Full Name"
                  />
                </fieldset>
                <fieldset className="fieldset w-full">
                  <label className="label" htmlFor="phone">
                    Phone Number
                  </label>
                  <div
                    className={`input input-bordered flex items-center gap-2 w-full ${
                      showPhoneError ? "input-error" : ""
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-base-content/50 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                    >
                      <g fill="none">
                        <path
                          d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value.replace(/\D/g, "").slice(0, 8))
                      }
                      onBlur={() => setPhoneTouched(true)}
                      className="grow tabular-nums bg-transparent focus:outline-none"
                      placeholder="Phone"
                      maxLength={8}
                    />
                  </div>
                  {showPhoneError ? (
                    <p className="text-xs text-error mt-1">{phoneError}</p>
                  ) : (
                    <p className="text-xs text-base-content/50 mt-1">
                      Must be 8 digits
                    </p>
                  )}
                </fieldset>
              </div>
            </div>

            <div className="basis-1/2 flex flex-col gap-1">
              <p className="text-xl font-bold">Payment & Receipt Upload</p>
              <p className="text-xs sm:text-sm text-base-content/50">
                Please PayNow the listed amount and screenshot the payment confirmation screen for upload below
              </p>
              <div className="flex flex-col place-items-center gap-2 mt-2">
                <img
                  className="rounded-md w-1/2"
                  src="https://firebasestorage.googleapis.com/v0/b/pos-dashboard-zion.firebasestorage.app/o/IMG_0576.JPG?alt=media&token=32dc4e26-d802-4f32-8283-ed2ae57cb0e3"
                  alt="PayNow QR Code"
                />
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    Upload PayNow Screenshot
                  </legend>
                  <input type="file" className="file-input" />
                </fieldset>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary btn-block btn-lg mt-4 rounded-xl font-bold shadow-md shadow-primary/20 hover:scale-[1.02] transition-transform duration-200"
            >
              Confirm details and place order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
