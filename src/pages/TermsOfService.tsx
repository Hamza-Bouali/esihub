import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl mb-8">Rules for using ESIHUB.</p>
        </div>
      </div>

      {/* Terms of Service Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h2>Introduction</h2>
          <p>By using ESIHUB, you agree to these terms and conditions.</p>
          <h2>User Responsibilities</h2>
          <p>You are responsible for maintaining the security of your account and using our services responsibly.</p>
          <h2>Limitations</h2>
          <p>We are not liable for any damages resulting from the use of our services.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;