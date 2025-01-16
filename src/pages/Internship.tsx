import React from 'react';
import InternshipCard from '../components/InternshipCard';

const Internship: React.FC = () => {
  const internships = [
    {
      title: 'Software Engineering Intern',
      company: 'Google',
      location: 'Mountain View, CA',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Data Science Intern',
      company: 'Facebook',
      location: 'Menlo Park, CA',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Internships</h1>
          <p className="text-xl mb-8">Find the best internship opportunities for ESI students.</p>
        </div>
      </div>

      {/* Internships Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship, index) => (
            <InternshipCard
              key={index}
              title={internship.title}
              company={internship.company}
              location={internship.location}
              link={internship.link}
              image={internship.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internship;