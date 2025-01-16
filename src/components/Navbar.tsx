import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = {
    main: [
      { to: '/', label: 'Home' },
      { to: '/resources', label: 'Resources' },
      { to: '/events', label: 'Events' },
      { to: '/blog', label: 'Blog' },
    ],
    community: [
      { to: '/hall-of-fame', label: 'Hall of Fame' },
      { to: '/alumni', label: 'Alumni' },
      { to: '/internship', label: 'Internship' },
      { to: '/gamification', label: 'Gamification' },
    ],
    contribute: [
      { to: '/contribute', label: 'Contribute' },
      { to: '/donation', label: 'Donation' },
      { to: '/feedback', label: 'Feedback' },
      { to: '/tools', label: 'Tools' },
    ],
    legal: [
      { to: '/about-us', label: 'About Us' },
      { to: '/privacy-policy', label: 'Privacy Policy' },
      { to: '/terms-of-service', label: 'Terms of Service' },
    ],
  };

  return (
    <nav className="bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">ESI Hub</Link>
          
          <button
            className="md:hidden p-2 rounded hover:bg-blue-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.main.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="hover:bg-blue-700 px-3 py-2 rounded transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Dropdown for More */}
            <div className="relative group">
              <button className="hover:bg-blue-700 px-3 py-2 rounded">
                More ▼
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg hidden group-hover:block">
                {Object.entries(menuItems).slice(1).map(([category, items]) => (
                  <div key={category} className="py-2">
                    <div className="px-4 py-1 text-sm font-semibold text-gray-500 uppercase">
                      {category}
                    </div>
                    {items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="pt-4">
              <div className="text-sm font-semibold text-blue-200 uppercase px-2">
                {category}
              </div>
              {items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-2 py-2 hover:bg-blue-700 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;