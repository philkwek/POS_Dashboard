import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onAdminLoginClick: () => void;
}

/**
 * Navbar component: Displays the application header and admin login/status.
 * @param onAdminLoginClick - Callback to trigger the login modal.
 */
const Navbar: React.FC<NavbarProps> = ({ onAdminLoginClick }) => {
  const { user, logout } = useAuth();
  const [isLogout, setIsLogout] = useState(false);

  const onLogoutButtonClick = () => {
      setIsLogout(!isLogout);
  }

  const onConfirmLogoutClick = async () => {
    try {
      await logout();
      setIsLogout(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="navbar justify-between flex flex-col gap-2 sm:flex-row">
      <div className="btn btn-ghost text-xl">🚀 Detonate Fundraising 🚀</div>
      {user == null ? (
        <button className="btn" onClick={onAdminLoginClick}>Admin</button>
      ) : (
        <button className="btn" onClick={onLogoutButtonClick}>Admin: {user.displayName || user.email}</button>
      )}
      {isLogout && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs z-50">
            <div className="card bg-base-100 p-7 flex flex-col gap-5 border border-base-300 shadow-xl">
              <h1 className="text-center">Confirm Logout?</h1>
              <div className="flex flex-row gap-4">
                <button className="btn btn-error" onClick={onConfirmLogoutClick}>Logout</button>
                <button className="btn btn-outline" onClick={onLogoutButtonClick}>Cancel</button>
              </div>
            </div>
        </div>)}
    </div>
  );
};

export default Navbar;
