import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl mb-8">How we handle your data.</p>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h2>Introduction</h2>
          <p>Your privacy is important to us. This policy explains how we collect, use, and protect your data.</p>
          <h2>Data Collection</h2>
          <p>We collect information such as your name, email, and usage data to improve our services.</p>
          <h2>Data Usage</h2>
          <p>Your data is used to provide and improve our services, and we do not share it with third parties.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;