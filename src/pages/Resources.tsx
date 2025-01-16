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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl mb-8">Everything you need to succeed at ESI.</p>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="container mx-auto px-4 py-12">
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
    </div>
  );
};

export default Resources;