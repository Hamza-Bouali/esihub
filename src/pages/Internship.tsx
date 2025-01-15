import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InternshipCard from '../components/InternshipCard';

const Internship: React.FC = () => {
  const internships = [
    {
      title: 'Software Engineering Intern',
      company: 'Google',
      location: 'Mountain View, CA',
      link: 'https://example.com',
    },
    {
      title: 'Data Science Intern',
      company: 'Facebook',
      location: 'Menlo Park, CA',
      link: 'https://example.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">Internships</h2>
        <p className="text-center pb-4 border-b border-gray-700">Find internship opportunities.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              title={internship.title}
              company={internship.company}
              location={internship.location}
              link={internship.link}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Internship;