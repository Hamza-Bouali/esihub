import React from 'react';
import AlumniCard from '../components/AlumniCard';

const Alumni: React.FC = () => {
  const alumni = [
    {
      name: 'John Doe',
      role: 'Software Engineer',
      company: 'Google',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      role: 'Data Scientist',
      company: 'Facebook',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Alumni Network</h1>
          <p className="text-xl mb-8">Connect with ESI alumni and explore their success stories.</p>
        </div>
      </div>

      {/* Alumni Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((alumnus, index) => (
            <AlumniCard
              key={index}
              name={alumnus.name}
              role={alumnus.role}
              company={alumnus.company}
              link={alumnus.link}
              image={alumnus.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;