import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  link: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, link, image }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{date}</p>
      <p className="text-gray-400">{description}</p>
    </a>
  );
};

export default EventCard;