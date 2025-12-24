import React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '../common/PublicHeader';

const HomePage = () => {
  // Offerings for bottom section
  const offerings = [
    'Planning',
    'Sourcing',
    'Screening',
    'Employer Branding',
    'Hiring Automation',
    'AI-Powered Recruitment',
    'Talent Analytics',
    'Campus Hiring',
    'Executive Search',
  ];

  return (
    <div>
      <PublicHeader />

      {/* Hero Section with Video Background */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/jobboard/hero_bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            One-Stop Solution.<br />
            Talent Decoded.
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
            One-stop solution for planning, sourcing, screening,<br />
            employer branding, hiring automation, powered by AI<br />
            to help you decode Indian talent.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition font-medium text-lg">
              Request demo
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white hover:text-black transition font-medium text-lg">
              Watch video
            </button>
          </div>
        </div>

        {/* Bottom Offerings Ticker */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 py-6 overflow-hidden">
          <div className="flex animate-scroll-slow">
            <div className="flex gap-12 whitespace-nowrap items-center">
              {[...offerings, ...offerings, ...offerings].map((offering, index) => (
                <span
                  key={index}
                  className="text-white text-base font-medium px-4"
                >
                  {offering}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
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
  );
};

export default HomePage;
