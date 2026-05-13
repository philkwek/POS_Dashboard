import React from 'react';
import DrawerLayout from '../components/DrawerLayout';

const Admin: React.FC = () => {
  return (
    <DrawerLayout>
      <div className="flex h-full w-full flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold">Admin Settings</h1>
        <p className="mt-4 text-xl opacity-70">This page is under construction.</p>
        <div className="mt-8">
            <span className="loading loading-bars loading-lg"></span>
        </div>
      </div>
    </DrawerLayout>
  );
};

export default Admin;
