import React from 'react';
import ContributionForm from '../components/ContributionForm';

const Contribute: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contribute</h1>
          <p className="text-xl mb-8">Help us improve ESIHUB by sharing your resources and ideas.</p>
        </div>
      </div>

      {/* Contribution Form */}
      <div className="container mx-auto px-4 py-12">
        <ContributionForm />
      </div>
    </div>
  );
};

export default Contribute;