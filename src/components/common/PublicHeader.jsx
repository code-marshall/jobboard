import React from 'react';
import { Link } from 'react-router-dom';

const PublicHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">JobBoard</Link>
          <nav className="flex gap-6">
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600 transition">Jobs</Link>
            <Link to="/recruiters" className="text-gray-700 hover:text-blue-600 transition">For Recruiters</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
