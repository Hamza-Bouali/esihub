import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">Terms of Service</h2>
        <p className="text-center pb-4 border-b border-gray-700">Rules for using ESIHUB.</p>

        <div className="py-5">
          <p className="text-center">
            By using ESIHUB, you agree to our terms and conditions.
          </p>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;