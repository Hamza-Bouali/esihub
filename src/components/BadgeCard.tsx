import React from 'react';

interface BadgeCardProps {
  title: string;
  description: string;
  icon: string;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default BadgeCard;