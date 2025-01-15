import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 h-full">
        <a href="https://esihub.net/">
          <h2 className="text-center text-3xl font-bold">ESIHUB</h2>
        </a>
        <h6 className="text-center pb-4 border-b border-gray-700">Everything in one place.</h6>
        <p className="text-center">A kind reminder 🥰🥰🥰 You can donate to keep the platform running 🥰</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
          <ServiceCard
            title="DOCESI"
            description="A drive folder that contains the necessary documents for students including course materials and past exam papers."
            link="/docs"
            hoverClass="hover:bg-orange-600 hover:text-white"
          />
          <ServiceCard
            title="REPORTESI"
            description="A service made to offer ESI students access to a collection of laureates' internship reports."
            link="https://bit.ly/3b76CLg"
            hoverClass="hover:bg-purple-700 hover:text-white"
          />
          <ServiceCard
            title="LOGOESI"
            description="A friendly interactive tool made to create high-quality ESI’s logo with customizable dimensions."
            link="/logo"
            hoverClass="hover:bg-gray-600 hover:text-white"
          />
          <ServiceCard
            title="NOTESI"
            description="A grades management system made to simplify the process of consulting marks for students (currently unavailable for maintenance)."
            link="https://note.esihub.net/"
            hoverClass="hover:bg-blue-500 hover:text-white"
            disabled
          />
        </div>

        <footer className="text-center mt-8">
          <p>
            Made with ❤️ by <b><a href="https://www.linkedin.com/in/Khalid9ASSI" className="text-blue-400 hover:text-blue-300">Khalid KASSI</a></b>
          </p>
          <p>
            Maintained by <b><a href="mailto:achraf.sani@esi.ac.ma" className="text-blue-400 hover:text-blue-300">Achraf SANI</a></b>
          </p>
          <p>Since 2019</p>
          <p>
            <a href="/hall-of-fame" className="text-blue-400 hover:text-blue-300">Hall of Fame</a>
          </p>
        </footer>
      </div>
      <Footer />
    </div>
  );
};

export default Home;