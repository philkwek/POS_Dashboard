import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * ProtectedRoute Component: Restricts access to authenticated users.
 * Redirects unauthenticated users to the homepage.
 */
const ProtectedRoute: React.FC = () => {
  const { user, loading } = useAuth();

  // Show nothing while checking authentication state
  if (loading) {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );
  }

  // Redirect to homepage if user is not logged in
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Render child routes if authenticated
  return <Outlet />;
};

export default ProtectedRoute;
