import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { OrderItemType } from '@pos-dashboard/shared';
import OrderItem from '../components/OrderItem';

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

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<OrderItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<OrderStatusFilter>('ALL');

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

  const filteredOrders = orders.filter((order) => {
    if (activeFilter === 'ALL') return true;
    return order.status === activeFilter;
  });

  return (
    <div className="flex h-full w-full flex-col p-5 pt-1 gap-4">
      <div>
        <h1 className="text-4xl font-bold">Orders</h1>
        <p className="opacity-70">Manage and track all orders</p>
      </div>

      {/* Status Filter Buttons */}
      <div className="flex flex-wrap gap-2 my-2">
        {FILTER_OPTIONS.map((option) => {
          const isActive = activeFilter === option.value;
          return (
            <button
              key={option.label}
              onClick={() => setActiveFilter(option.value)}
              className={`btn btn-sm sm:btn-md ${
                isActive ? 'btn-primary' : 'btn-outline'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Orders List / Grid */}
      {loading ? (
        <div className="flex justify-center items-center p-12">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : filteredOrders.length === 0 ? (
        <div className="p-10 text-center text-base-content/60 bg-base-200/50 rounded-lg border border-dashed border-base-300">
          No orders found matching the selected filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredOrders.map((order) => (
            <OrderItem
              key={order.id}
              item={order}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;