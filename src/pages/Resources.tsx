import React from 'react';
import ResourceCard from '../components/ResourceCard';

const Resources: React.FC = () => {
  const resources = [
    {
      title: 'Programming Resources',
      description: 'Links to Codecademy, LeetCode, and freeCodeCamp.',
      link: 'https://example.com',
      icon: '💻',
    },
    {
      title: 'Math Tools',
      description: 'Links to Wolfram Alpha, Desmos, and Symbolab.',
      link: 'https://example.com',
      icon: '🧮',
    },
    {
      title: 'Study Tips',
      description: 'Articles and videos on effective study techniques.',
      link: 'https://example.com',
      icon: '📖',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Resources
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Everything you need to succeed at ESI.
            </p>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              description={resource.description}
              link={resource.link}
              icon={resource.icon}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need More Resources?</h2>
          <p className="text-xl mb-8">Explore our comprehensive collection of study materials.</p>
          <a
            href="/resources"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Explore Resources
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;