import React from 'react';

const Donation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Donation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Support ESIHUB to keep it running.
            </p>
          </div>
        </div>
      </div>

      {/* Donation Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <p className="text-lg mb-8">Your donations help us maintain and improve the platform. Thank you for your support!</p>
          <a
            href="https://example.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Do More?</h2>
          <p className="text-xl mb-8">Join our community and contribute to ESIHUB.</p>
          <a
            href="/contribute"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Contribute Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donation;