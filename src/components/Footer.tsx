import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
  <div className="container mx-auto text-center">
    <div className="space-x-4 mb-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/resources" className="hover:underline">Resources</Link>
      {/* Add more links */}
    </div>

    {/* Social Media Links */}
    <div className="flex justify-center space-x-4 mb-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        Facebook
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        Twitter
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        LinkedIn
      </a>
    </div>

    {/* Newsletter Subscription */}
    <div className="mb-4">
      <p className="text-sm text-gray-400 mb-2">Subscribe to our newsletter:</p>
      <form className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-lg bg-gray-700 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>

    <p className="text-sm">© 2023 ESIHUB. All rights reserved.</p>
  </div>
</footer>
  );
};

export default Footer;