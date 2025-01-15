import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  link: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{date}</p>
      <p className="text-gray-400">{description}</p>
    </a>
  );
};

export default EventCard;