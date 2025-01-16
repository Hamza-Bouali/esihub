import React from 'react';
import ToolCard from '../components/ToolCard';

const Tools: React.FC = () => {
  const tools = [
    {
      title: 'LOGOESI',
      description: 'Create high-quality ESI logos with customizable dimensions.',
      link: '/logo',
      icon: '🎨',
    },
    {
      title: 'Grade Calculator',
      description: 'Calculate your GPA or predict your grades.',
      link: '/grade-calculator',
      icon: '📊',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Tools</h1>
          <p className="text-xl mb-8">Interactive tools for ESI students.</p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              link={tool.link}
              icon={tool.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;