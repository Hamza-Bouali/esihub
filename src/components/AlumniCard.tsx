import React from 'react';

interface AlumniCardProps {
  name: string;
  role: string;
  company: string;
  link: string;
}

const AlumniCard: React.FC<AlumniCardProps> = ({ name, role, company, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-400">{role}</p>
      <p className="text-gray-400">{company}</p>
    </a>
  );
};

export default AlumniCard;