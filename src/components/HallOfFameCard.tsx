import React from 'react';

interface HallOfFameCardProps {
  name: string;
  role: string;
  link: string;
  image: string;
    year: string;
}

const HallOfFameCard: React.FC<HallOfFameCardProps> = ({ name, role, link, image , year}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full mb-4"
        />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-400">{role}</p>
        <p className="text-gray-600">{year}</p>
      </div>
    </a>
  );
};

export default HallOfFameCard;