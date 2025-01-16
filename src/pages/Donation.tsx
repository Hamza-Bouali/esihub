import React from 'react';

const Donation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Donation</h1>
          <p className="text-xl mb-8">Support ESIHUB to keep it running.</p>
        </div>
      </div>

      {/* Donation Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-lg mb-8">Your donations help us maintain and improve the platform. Thank you for your support!</p>
          <a
            href="https://example.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donation;