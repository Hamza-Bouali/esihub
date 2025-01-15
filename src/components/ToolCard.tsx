import React from 'react';

interface ToolCardProps {
  title: string;
  description: string;
  link: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ title, description, link }) => {
  return (
    <a
      href={link}
      className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </a>
  );
};

export default ToolCard;