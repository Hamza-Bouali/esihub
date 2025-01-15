import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <div className="space-x-4 mb-4">
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
        <p className="text-sm">© 2023 ESIHUB. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;