import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const DashboardHeader = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/recruiters');
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/dashboard" className="text-2xl font-bold text-blue-600">{user?.company}</Link>
            <nav className="flex gap-6">
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition">Dashboard</Link>
              <Link to="/dashboard/jobs" className="text-gray-700 hover:text-blue-600 transition">Job Posts</Link>
              <Link to="/dashboard/resdex" className="text-gray-700 hover:text-blue-600 transition">Resdex</Link>
            </nav>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {user?.company[0]}
              </div>
              <span className="text-gray-700">{user?.company}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-10">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition">
                  Profile Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition text-red-600 font-semibold"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
