import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to ESIHUB</h1>
          <p className="text-xl mb-8">Your one-stop platform for resources, tools, and community.</p>
          <a
            href="/donation"
            className="bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Support Us - Donate Now
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
    <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ServiceCard
        title="DOCESI"
        description="Access course materials, past exam papers, and more."
        link="/docs"
        hoverClass="hover:bg-orange-600 hover:text-white"
        icon="📚"
      />
          <ServiceCard
            title="REPORTESI"
            description="Explore internship reports from ESI students."
            link="https://bit.ly/3b76CLg"
            hoverClass="hover:bg-purple-700 hover:text-white"
            icon="📄"
          />
          <ServiceCard
            title="LOGOESI"
            description="Create custom ESI logos with ease."
            link="/logo"
            hoverClass="hover:bg-gray-600 hover:text-white"
            icon="🎨"
          />
          <ServiceCard
            title="NOTESI"
            description="Manage and consult your grades (currently under maintenance)."
            link="https://note.esihub.net/"
            hoverClass="hover:bg-blue-500 hover:text-white"
            icon="📊"
            disabled
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-gray-300 italic">"ESIHUB has been a lifesaver for my studies. The resources are top-notch!"</p>
              <p className="mt-4 font-semibold">- John Doe</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-gray-300 italic">"The internship reports helped me land my dream job. Thank you, ESIHUB!"</p>
              <p className="mt-4 font-semibold">- Jane Smith</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <p className="text-gray-300 italic">"LOGOESI is so easy to use. I created a professional logo in minutes!"</p>
              <p className="mt-4 font-semibold">- Ahmed Ali</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;