import React from 'react';

interface InternshipCardProps {
  title: string;
  company: string;
  location: string;
  link: string;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ title, company, location, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{company}</p>
      <p className="text-gray-400">{location}</p>
    </a>
  );
};

export default InternshipCard;