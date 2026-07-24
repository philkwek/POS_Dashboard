import React, { useState, useEffect } from 'react';
import { collection, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { OrderItemType } from '@pos-dashboard/shared';
import OrderItem from '../components/OrderItem';
import OrderDetailModal from '../components/OrderDetailModal';

export type OrderStatusFilter = 'ALL' | 0 | 1 | 2;

interface FilterOption {
  label: string;
  value: OrderStatusFilter;
}

const FILTER_OPTIONS: FilterOption[] = [
  { label: 'All orders', value: 'ALL' },
  { label: 'Pending', value: 0 },
  { label: 'Paid', value: 1 },
  { label: 'Collected', value: 2 },
];

const getOrderTimestamp = (dateInput?: any): number => {
  if (!dateInput) return 0;
  if (typeof dateInput === 'object' && dateInput !== null) {
    if (typeof dateInput.toDate === 'function') {
      return dateInput.toDate().getTime();
    }
    if ('seconds' in dateInput && typeof dateInput.seconds === 'number') {
      return dateInput.seconds * 1000;
    }
  }
  if (typeof dateInput === 'number') return dateInput;
  if (typeof dateInput === 'string') {
    const time = new Date(dateInput.replace(/\sat\s/i, ' ').trim()).getTime();
    return isNaN(time) ? 0 : time;
  }
  return 0;
};

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<OrderItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<OrderStatusFilter>('ALL');
  const [sortDateOrder, setSortDateOrder] = useState<'LATEST' | 'EARLIEST'>('LATEST');
  const [selectedOrder, setSelectedOrder] = useState<OrderItemType | null>(null);

  useEffect(() => {
    const ordersRef = collection(db, 'orders');
    const unsubscribe = onSnapshot(
      ordersRef,
      (snapshot) => {
        const fetchedOrders = snapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            }) as OrderItemType
        );
        setOrders(fetchedOrders);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleStatusChange = async (
    orderId: string,
    newStatus: number,
    updatedByEmail: string
  ) => {
    const orderRef = doc(db, 'orders', orderId);
    await updateDoc(orderRef, {
      status: newStatus,
      updatedBy: updatedByEmail,
    });
    setSelectedOrder((prev) =>
      prev ? { ...prev, status: newStatus, updatedBy: updatedByEmail } : null
    );
  };

  const filteredOrders = orders.filter((order) => {
    if (activeFilter === 'ALL') return true;
    return order.status === activeFilter;
  });

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    const timeA = getOrderTimestamp(a.createdAt);
    const timeB = getOrderTimestamp(b.createdAt);
    return sortDateOrder === 'LATEST' ? timeB - timeA : timeA - timeB;
  });

  return (
    <div className="flex h-full w-full flex-col p-5 pt-1 gap-4">
      <div>
        <h1 className="text-4xl font-bold">Orders</h1>
        <p className="opacity-70">Manage and track all orders</p>
      </div>

      {/* Controls Bar: Status Filters & Date Sort Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-2">
        <div className="flex flex-wrap gap-2 justify-between">
          {FILTER_OPTIONS.map((option) => {
            const isActive = activeFilter === option.value;
            return (
              <button
                key={option.label}
                onClick={() => setActiveFilter(option.value)}
                className={`btn btn-sm sm:btn-md grow ${
                  isActive ? 'btn-primary' : 'btn-outline'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <button
          onClick={() =>
            setSortDateOrder((prev) => (prev === 'LATEST' ? 'EARLIEST' : 'LATEST'))
          }
          className="btn btn-sm sm:btn-md btn-outline gap-2 shrink-0 font-semibold"
          title="Toggle Date Sort Order"
        >
          <span>Sort Date:</span>
          <span>
            {sortDateOrder === 'LATEST' ? 'Latest First ↓' : 'Earliest First ↑'}
          </span>
        </button>
      </div>

      {/* Orders List / Grid */}
      {loading ? (
        <div className="flex justify-center items-center p-12">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : sortedOrders.length === 0 ? (
        <div className="p-10 text-center text-base-content/60 bg-base-200/50 rounded-lg border border-dashed border-base-300">
          No orders found matching the selected filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedOrders.map((order) => (
            <OrderItem
              key={order.id}
              item={order}
              orderItemOnClick={() => setSelectedOrder(order)}
            />
          ))}
        </div>
      )}

      {/* Order Detail Floating Card Modal */}
      <OrderDetailModal
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default Orders;