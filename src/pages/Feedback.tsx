import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeedbackForm from '../components/FeedbackForm';

const Feedback: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">Feedback</h2>
        <p className="text-center pb-4 border-b border-gray-700">We value your feedback!</p>

        <div className="py-5">
          <FeedbackForm />
        </div>
      </main>
    </div>
  );
};

export default Feedback;