import React from 'react';
import FeedbackForm from '../components/FeedbackForm';

const Feedback: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Feedback</h1>
          <p className="text-xl mb-8">We value your feedback to improve ESIHUB.</p>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="container mx-auto px-4 py-12">
        <FeedbackForm />
      </div>
    </div>
  );
};

export default Feedback;