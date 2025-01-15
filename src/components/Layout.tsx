import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = React.useState(false);
  const location = useLocation();

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Resources', href: '/resources' },
      { name: 'Events', href: '/events' },
      { name: 'Blog', href: '/blog' },
    ],
    tools: [
      { name: 'DOCESI', href: '/docs' },
      { name: 'REPORTESI', href: '/reports' },
      { name: 'LOGOESI', href: '/logo' },
      { name: 'NOTESI', href: '/notes' },
    ],
    community: [
      { name: 'Hall of Fame', href: '/hall-of-fame' },
      { name: 'Alumni', href: '/alumni' },
      { name: 'Contribute', href: '/contribute' },
      { name: 'Feedback', href: '/feedback' },
    ],
  };

  const isCurrentPage = (href) => location.pathname === href;

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Top banner for extra small screens */}
      <div className="bg-blue-600 lg:hidden">
        <div className="px-4 py-2 text-center text-sm text-white">
          <Link to="/donation" className="font-medium hover:underline">
            Support ESIHUB - Donate Now →
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-2 sm:px-4 lg:px-8">
          <div className="relative h-16 flex justify-between">
            {/* Logo area */}
            <div className="flex items-center lg:w-64 flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-white text-xl font-bold">ESI Hub</span>
              </Link>
            </div>

            {/* Desktop Navigation - Only show on large screens */}
            <div className="hidden lg:flex lg:items-center lg:justify-between lg:flex-1">
              <div className="flex space-x-4">
                {Object.entries(navigation).map(([category, items]) => (
                  <div key={category} className="relative group">
                    <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 w-56 mt-2 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                      <div className="py-1">
                        {items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`block px-4 py-2 text-sm ${
                              isCurrentPage(item.href)
                                ? 'bg-gray-700 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop right section */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-64 px-4 py-1 text-sm text-gray-300 bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute right-3 top-1.5 h-4 w-4 text-gray-400" />
                </div>
                <Link
                  to="/donation"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Donate
                </Link>
                <button className="p-1 text-gray-400 hover:text-white">
                  <User className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="p-2 text-gray-400 hover:text-white"
              >
                <Search className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile search bar */}
          {isMobileSearchOpen && (
            <div className="lg:hidden px-2 py-2 border-t border-gray-700">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 text-sm text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-700">
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
              {Object.entries(navigation).map(([category, items]) => (
                <div key={category} className="px-2 py-3 space-y-1">
                  <div className="px-3 py-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {category}
                  </div>
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        isCurrentPage(item.href)
                          ? 'bg-gray-700 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="flex-grow">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="w-full max-w-[1440px] mx-auto">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-[1920px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {Object.entries(navigation).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  {category}
                </h3>
                <ul className="mt-4 space-y-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="text-center">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} ESI Hub. All rights reserved.
              </p>
              <div className="mt-4 flex justify-center space-x-6">
                <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;