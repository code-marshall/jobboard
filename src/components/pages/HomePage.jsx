import React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '../common/PublicHeader';

const HomePage = () => {
  return (
    <div>
      <PublicHeader />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to JobBoard</h1>
            <p className="text-2xl mb-8">Connect talent with opportunity</p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/jobs"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
              >
                Browse Jobs
              </Link>
              <Link
                to="/recruiters"
                className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-semibold text-lg"
              >
                For Recruiters
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">Find Jobs</h3>
              <p className="text-gray-600">Browse thousands of job opportunities from top companies</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">AI Matching</h3>
              <p className="text-gray-600">Get matched with the right opportunities using AI</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Grow Your Career</h3>
              <p className="text-gray-600">Take your career to the next level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
