import React, { useState } from 'react';
import { OrderItemType } from '@pos-dashboard/shared';
import { useAuth } from '../context/AuthContext';

interface OrderDetailModalProps {
  order: OrderItemType | null;
  onClose: () => void;
  onStatusChange: (orderId: string, newStatus: number, updatedByEmail: string) => Promise<void>;
}

const formatOrderDate = (dateInput?: any): string => {
  if (!dateInput) return '';
  try {
    let date: Date;

    if (typeof dateInput === 'object' && dateInput !== null) {
      if (typeof dateInput.toDate === 'function') {
        date = dateInput.toDate();
      } else if ('seconds' in dateInput && typeof dateInput.seconds === 'number') {
        date = new Date(dateInput.seconds * 1000);
      } else {
        return '';
      }
    } else if (typeof dateInput === 'string') {
      const cleaned = dateInput.replace(/\sat\s/i, ' ').trim();
      date = new Date(cleaned);
    } else if (typeof dateInput === 'number') {
      date = new Date(dateInput);
    } else {
      return '';
    }

    if (isNaN(date.getTime())) {
      return typeof dateInput === 'string' ? dateInput : '';
    }

    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? ' PM' : ' AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${month} ${day}, ${year} at ${hours}:${minutes}${ampm}`;
  } catch {
    return typeof dateInput === 'string' ? dateInput : '';
  }
};

const OrderDetailModal: React.FC<OrderDetailModalProps> = ({
  order,
  onClose,
  onStatusChange,
}) => {
  const { user } = useAuth();
  const [draftStatus, setDraftStatus] = useState<number>(order?.status ?? 0);
  const [isSaving, setIsSaving] = useState(false);
  const [showConfirmExit, setShowConfirmExit] = useState(false);

  // Sync draftStatus when a new order is passed
  React.useEffect(() => {
    if (order) {
      setDraftStatus(order.status);
      setShowConfirmExit(false);
    }
  }, [order]);

  if (!order) return null;

  const hasUnsavedChanges = draftStatus !== order.status;

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'SGD',
    }).format(val);

  const totalCost = order.purchasedItems?.reduce(
    (acc, item) => acc + (item.cost || 0) * (item.quantity || 1),
    0
  );

  const handleAttemptClose = () => {
    if (hasUnsavedChanges) {
      setShowConfirmExit(true);
    } else {
      onClose();
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const adminEmail = user?.email || 'admin';
      await onStatusChange(order.id, draftStatus, adminEmail);
      onClose();
    } catch (err) {
      console.error('Failed to save order status:', err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleAttemptClose();
        }
      }}
    >
      <div className="bg-base-100 border border-base-200 shadow-2xl rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-6 flex flex-col gap-5">
        {/* Top Bar: Title & X Exit Button */}
        <div className="flex justify-between items-start pb-3 border-b border-base-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-base-content">
              Order Details
            </h2>
            <p className="text-xs text-base-content/60 font-mono mt-0.5">
              Order #{order.id}
            </p>
          </div>
          <button
            onClick={handleAttemptClose}
            className="btn btn-sm btn-circle btn-ghost text-base-content/70 hover:bg-base-200 font-bold"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Customer & Order Checked By Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-base-200/50 p-4 rounded-xl text-sm">
          <div>
            <span className="text-base-content/50 block text-xs">Customer Name</span>
            <span className="font-bold text-base-content">
              {order.customerName || 'Guest Customer'}
            </span>
          </div>
          <div>
            <span className="text-base-content/50 block text-xs">Contact Number</span>
            <span className="font-bold text-base-content font-mono">
              {order.customerNumber ? order.customerNumber : '-'}
            </span>
          </div>
          <div>
            <span className="text-base-content/50 block text-xs">Order Date</span>
            <span className="font-semibold text-base-content text-xs">
              {formatOrderDate(order.createdAt)}
            </span>
          </div>
          <div>
            <span className="text-base-content/50 block text-xs">Order Checked By</span>
            <span
              className={
                order.updatedBy === '-'
                  ? 'font-bold text-xs bg-yellow-300 text-yellow-950 px-1.5 py-0.5 rounded inline-block'
                  : 'font-bold text-primary text-xs'
              }
            >
              {order.updatedBy || '-'}
            </span>
          </div>
        </div>

        {/* Admin Order Status Changer */}
        <div className="bg-base-200/50 p-4 rounded-xl flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-base-content/60">
              Update Order Status
            </span>
            {hasUnsavedChanges && (
              <span className="text-xs text-warning font-semibold">
                ● Unsaved status change
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Pending', value: 0, color: 'btn-error' },
              { label: 'Paid', value: 1, color: 'btn-warning' },
              { label: 'Collected', value: 2, color: 'btn-success' },
            ].map((st) => {
              const isSelected = draftStatus === st.value;
              return (
                <button
                  key={st.value}
                  type="button"
                  onClick={() => setDraftStatus(st.value)}
                  className={`btn btn-sm flex-1 font-bold transition-all ${
                    isSelected ? st.color : 'btn-outline'
                  }`}
                >
                  {isSelected && '✓ '}
                  {st.label}
                </button>
              );
            })}
          </div>

          {/* Save Button */}
          {hasUnsavedChanges && (
            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={handleSave}
                disabled={isSaving}
                className="btn btn-primary btn-sm font-bold shadow-md shadow-primary/20"
              >
                {isSaving ? (
                  <>
                    <span className="loading loading-spinner loading-xs"></span>
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          )}
        </div>

        {/* Purchased Items Table */}
        {order.purchasedItems && order.purchasedItems.length > 0 && (
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-sm text-base-content">Purchased Items</h3>
            <div className="divide-y divide-base-200 border border-base-200 rounded-xl px-4 bg-base-100">
              {order.purchasedItems.map((pItem, idx) => (
                <div key={idx} className="py-3 flex justify-between items-center text-sm">
                  <div>
                    <p className="font-semibold text-base-content">{pItem.name || 'Product'}</p>
                    {pItem.variantId && (
                      <p className="text-xs text-base-content/50">Variant: {pItem.variantId}</p>
                    )}
                    <p className="text-xs text-base-content/50">
                      Qty: {pItem.quantity} × {formatCurrency(pItem.cost || 0)}
                    </p>
                  </div>
                  <span className="font-bold font-mono text-base-content">
                    {formatCurrency((pItem.cost || 0) * (pItem.quantity || 1))}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Total Cost */}
        <div className="flex justify-between items-center p-2 rounded-xl font-bold text-base sm:text-lg">
          <span>Total Order Amount</span>
          <span>{formatCurrency(totalCost || 0)}</span>
        </div>

        {/* PayNow Receipt Image */}
        {order.receiptImageUrl && (
          <div className="flex flex-col gap-2 pt-1">
            <p className="font-bold text-sm text-base-content">Uploaded Payment Receipt</p>
            <div className="w-full max-h-72 overflow-hidden rounded-xl border border-base-200 bg-base-200/40 flex items-center justify-center p-2">
              <a
                href={order.receiptImageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex justify-center"
                title="Click to view full receipt in new tab"
              >
                <img
                  src={order.receiptImageUrl}
                  alt="Payment Receipt"
                  className="max-h-64 object-contain rounded-lg shadow-sm hover:scale-[1.01] transition-transform duration-200"
                />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Unsaved Changes Confirmation Modal */}
      {showConfirmExit && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 p-4 animate-fade-in">
          <div className="bg-base-100 border border-base-200 shadow-2xl rounded-2xl p-6 max-w-sm w-full flex flex-col gap-4">
            <h3 className="font-bold text-lg text-error flex items-center gap-2">
              ⚠️ Unsaved Changes
            </h3>
            <p className="text-sm text-base-content/70">
              You have modified the order status without saving. Are you sure you want to exit and discard changes?
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmExit(false)}
                className="btn btn-ghost btn-sm font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-error btn-sm font-bold text-white shadow-sm"
              >
                Discard Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailModal;
