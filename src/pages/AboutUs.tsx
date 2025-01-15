import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">About Us</h2>
        <p className="text-center pb-4 border-b border-gray-700">Our mission and team.</p>

        <div className="py-5">
          <p className="text-center">
            ESIHUB was created to provide ESI students with a centralized platform for resources, tools, and community.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;