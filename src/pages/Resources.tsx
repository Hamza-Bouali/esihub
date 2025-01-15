import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';

const Resources: React.FC = () => {
  const resources = [
    {
      title: 'Programming Resources',
      description: 'Links to Codecademy, LeetCode, and freeCodeCamp.',
      link: 'https://example.com',
    },
    {
      title: 'Math Tools',
      description: 'Links to Wolfram Alpha, Desmos, and Symbolab.',
      link: 'https://example.com',
    },
    {
      title: 'Study Tips',
      description: 'Articles and videos on effective study techniques.',
      link: 'https://example.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">Resources</h2>
        <p className="text-center pb-4 border-b border-gray-700">Useful resources for ESI students.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              link={resource.link}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;