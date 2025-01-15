import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContributionForm from '../components/ContributionForm';

const Contribute: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">Contribute</h2>
        <p className="text-center pb-4 border-b border-gray-700">Help us improve ESIHUB.</p>

        <div className="py-5">
          <ContributionForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contribute;