import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ESI Hub</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/resources" className="hover:underline">Resources</Link>
          <Link to="/events" className="hover:underline">Events</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/hall-of-fame" className="hover:underline">Hall of Fame</Link>
          <Link to="/contribute" className="hover:underline">Contribute</Link>
          <Link to="/donation" className="hover:underline">Donation</Link>
          <Link to="/alumni" className="hover:underline">Alumni</Link>
          <Link to="/tools" className="hover:underline">Tools</Link>
          <Link to="/feedback" className="hover:underline">Feedback</Link>
          <Link to="/about-us" className="hover:underline">About Us</Link>
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
          <Link to="/gamification" className="hover:underline">Gamification</Link>
          <Link to="/internship" className="hover:underline">Internship</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;