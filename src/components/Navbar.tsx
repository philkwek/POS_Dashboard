import React from 'react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onAdminLoginClick: () => void;
}

/**
 * Navbar component: Displays the application header and admin login/status.
 * @param onAdminLoginClick - Callback to trigger the login modal.
 */
const Navbar: React.FC<NavbarProps> = ({ onAdminLoginClick }) => {
  const { user } = useAuth();

  return (
    <div className="navbar justify-between flex flex-col gap-2 sm:flex-row">
      <div className="btn btn-ghost text-xl">Detonate Fundraising</div>
      {user == null ? (
        <button className="btn" onClick={onAdminLoginClick}>Admin</button>
      ) : (
        <button className="btn">Admin: {user.displayName || user.email}</button>
      )}
    </div>
  );
};

export default Navbar;
