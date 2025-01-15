import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">Community</h2>
        <p className="text-center pb-4 border-b border-gray-700">Connect with other ESI students.</p>

        <div className="py-5">
          <p className="text-center">Coming soon! Join our community forums and study groups.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;