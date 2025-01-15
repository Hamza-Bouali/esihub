import React from 'react';

interface AchievementCardProps {
  title: string;
  description: string;
  image: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default AchievementCard;