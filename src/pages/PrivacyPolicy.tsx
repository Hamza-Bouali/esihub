import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">Privacy Policy</h2>
        <p className="text-center pb-4 border-b border-gray-700">How we handle your data.</p>

        <div className="py-5">
          <p className="text-center">
            Your privacy is important to us. We do not share your data with third parties.
          </p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;