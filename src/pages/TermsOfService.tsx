import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Rules for using ESIHUB.
            </p>
          </div>
        </div>
      </div>

      {/* Terms of Service Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h2>Introduction</h2>
          <p>By using ESIHUB, you agree to these terms and conditions.</p>
          <h2>User Responsibilities</h2>
          <p>You are responsible for maintaining the security of your account and using our services responsibly.</p>
          <h2>Limitations</h2>
          <p>We are not liable for any damages resulting from the use of our services.</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl mb-8">Reach out to us for more information.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;