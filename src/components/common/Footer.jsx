import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const offerings = [
    { name: 'Job Listings', path: '/jobs' },
    { name: 'Recruiter Portal', path: '/recruiters' },
    { name: 'Career Resources', path: '#' },
    { name: 'Company Profiles', path: '#' },
    { name: 'Job Alerts', path: '#' },
    { name: 'Resume Builder', path: '#' },
  ];

  const brands = [
    { name: 'JobBoard', path: '/' },
    { name: 'TechJobs', path: '#' },
    { name: 'CareerHub', path: '#' },
    { name: 'RecruitPro', path: '#' },
    { name: 'TalentConnect', path: '#' },
    { name: 'HireQuest', path: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <h2 className="text-2xl font-bold">JobBoard</h2>
            </div>
            <h3 className="text-xl font-semibold mb-3">Connecting Talent. Empowering Careers.</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your comprehensive platform for job discovery, career development, and recruitment solutions.
              Bridging the gap between talented professionals and leading companies worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Offerings */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {offerings.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands/Partners */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Network</h4>
            <ul className="space-y-2">
              {brands.map((brand, index) => (
                <li key={index}>
                  <Link
                    to={brand.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()}. All rights reserved by JobBoard
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
