import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';

const Tools: React.FC = () => {
  const tools = [
    {
      title: 'LOGOESI',
      description: 'Create high-quality ESI logos with customizable dimensions.',
      link: '/logo',
    },
    {
      title: 'Grade Calculator',
      description: 'Calculate your GPA or predict your grades.',
      link: '/grade-calculator',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">Tools</h2>
        <p className="text-center pb-4 border-b border-gray-700">Interactive tools for ESI students.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              link={tool.link}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;