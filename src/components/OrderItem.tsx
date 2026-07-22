import '../App.css';
import { OrderItemType } from '@pos-dashboard/shared';

interface OrderItemProp {
  item: OrderItemType;
  orderItemOnClick?: () => void;
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

function OrderItem({ item, orderItemOnClick }: OrderItemProp) {
  const getStatusBadge = (status: number) => {
    switch (status) {
      case 0:
        return <span className="badge badge-warning text-xs font-semibold">Pending</span>;
      case 1:
        return <span className="badge badge-success text-xs font-semibold">Paid</span>;
      case 2:
        return <span className="badge badge-info text-xs font-semibold">Collected</span>;
      default:
        return <span className="badge badge-ghost text-xs font-semibold">Unknown ({status})</span>;
    }
  };

  const totalCost = item.purchasedItems?.reduce(
    (acc, pItem) => acc + (pItem.cost || 0) * (pItem.quantity || 1),
    0
  );

  return (
    <div
      className="card bg-base-100 shadow-md border border-base-200 hover:shadow-lg transition-shadow cursor-pointer w-full"
      onClick={orderItemOnClick}
    >
      <div className="card-body p-4 sm:p-6 gap-3">
        {/* Header: Customer Info & Status */}
        <div className="flex flex-row justify-between items-start gap-2">
          <div>
            <h2 className="card-title text-base sm:text-lg font-bold">
              {item.customerName || 'Guest Customer'}
            </h2>
            {item.customerNumber !== undefined && (
              <p className="text-xs text-base-content/60 font-mono">
                Order #{item.customerNumber}
              </p>
            )}
          </div>
          {getStatusBadge(item.status)}
        </div>

        {/* Purchased Items List */}
        {item.purchasedItems && item.purchasedItems.length > 0 && (
          <div className="mt-1 flex flex-col gap-1 border-t border-base-200 pt-2 text-xs sm:text-sm">
            {item.purchasedItems.map((pItem, idx) => (
              <div key={pItem.productId || idx} className="flex justify-between items-center">
                <span>
                  {pItem.name || 'Product'} <span className="text-xs opacity-70">x{pItem.quantity}</span>
                </span>
                <span className="font-mono">${((pItem.cost || 0) * (pItem.quantity || 1)).toFixed(2)}</span>
              </div>
            ))}
          </div>
        )}

        {/* Footer: Date & Total */}
        <div className="flex justify-between items-center border-t border-base-200 pt-2 text-xs mt-1">
          <span className="">
            Order Date: {formatOrderDate(item.createdAt)}
          </span>
          {totalCost !== undefined && (
            <span className="font-bold text-sm text-primary">
              Total: ${totalCost.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderItem;