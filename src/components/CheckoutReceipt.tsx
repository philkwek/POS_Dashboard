import React from "react";
import { useNavigate } from "react-router-dom";
import { OrderItemType } from "@pos-dashboard/shared";

export interface CheckoutReceiptProps {
  orderRefNum: string;
  orderData: OrderItemType;
}

const CheckoutReceipt: React.FC<CheckoutReceiptProps> = ({
  orderRefNum,
  orderData,
}) => {
  const navigate = useNavigate();

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "SGD",
    }).format(val);

  const subtotal = orderData.purchasedItems.reduce(
    (acc, item) => acc + item.cost * item.quantity,
    0
  );

  return (
    <div className="w-full max-w-3xl bg-base-100 border border-base-200 shadow-xl rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
      {/* Success Header */}
      <div className="flex flex-col items-center text-center gap-2 pb-4 border-b border-base-200">
        <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center text-success text-3xl font-bold">
          ✓
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-base-content">
          Order Confirmed!
        </h2>
        <p className="text-xs sm:text-sm text-base-content/60">
          Thank you for your order. Your receipt details are listed below.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
          <span className="badge badge-primary font-mono text-xs p-3">
            Ref: {orderRefNum}
          </span>
          <span className="badge badge-warning font-semibold text-xs p-3">
            Pending Confirmation
          </span>
        </div>
      </div>

      {/* Customer Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-base-200/50 p-4 rounded-xl text-sm">
        <div>
          <span className="text-base-content/50 block text-xs">Customer Name</span>
          <span className="font-bold text-base-content">{orderData.customerName}</span>
        </div>
        <div>
          <span className="text-base-content/50 block text-xs">Contact Number</span>
          <span className="font-bold text-base-content">{orderData.customerNumber}</span>
        </div>
      </div>

      {/* Purchased Items List */}
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-lg text-base-content">Order Items</h3>
        <div className="divide-y divide-base-200 border border-base-200 rounded-xl px-4 bg-base-100">
          {orderData.purchasedItems.map((item, idx) => (
            <div key={idx} className="py-3 flex justify-between items-center text-sm">
              <div>
                <p className="font-semibold text-base-content">{item.name}</p>
                {item.variantId && (
                  <p className="text-xs text-base-content/50">Variant: {item.variantId}</p>
                )}
                <p className="text-xs text-base-content/50">
                  Qty: {item.quantity} × {formatCurrency(item.cost)}
                </p>
              </div>
              <span className="font-bold text-base-content">
                {formatCurrency(item.cost * item.quantity)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Total */}
      <div className="flex justify-between items-center p-4 bg-primary/10 rounded-xl font-extrabold text-lg text-primary">
        <span>Total Paid</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>

      {/* Payment Receipt Image Preview */}
      {orderData.receiptImageUrl && (
        <div className="flex flex-col gap-2 pt-2">
          <p className="font-bold text-lg text-base-content">Uploaded Payment Receipt</p>
          <div className="w-full max-h-64 overflow-hidden rounded-xl border border-base-200 bg-base-200/40 flex items-center justify-center p-2">
            <img
              src={orderData.receiptImageUrl}
              alt="Payment Receipt"
              className="max-h-60 object-contain rounded-lg shadow-sm"
            />
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-base-200">
        <button
          onClick={() => navigate("/")}
          className="btn btn-primary flex-1 font-bold rounded-xl shadow-md shadow-primary/20 hover:scale-[1.01] transition-transform duration-200"
        >
          Return to Storefront
        </button>
        <button
          onClick={() => window.print()}
          className="btn btn-outline flex-1 font-bold rounded-xl"
        >
          🖨️ Print Receipt
        </button>
      </div>
    </div>
  );
};

export default CheckoutReceipt;
