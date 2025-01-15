import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Donation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">Donation</h2>
        <p className="text-center pb-4 border-b border-gray-700">Support ESIHUB to keep it running.</p>

        <div className="py-5">
          <p className="text-center">Your donations help us maintain and improve the platform. Thank you for your support!</p>
          <div className="text-center mt-4">
            <a
              href="https://example.com/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Donate Now
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donation;