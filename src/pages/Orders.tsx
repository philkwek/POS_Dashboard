import React, { useState } from 'react';

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
  const [activeFilter, setActiveFilter] = useState<OrderStatusFilter>('ALL');

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
    </div>
  );
};

export default Orders;