import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  hoverClass: string;
  disabled?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link, hoverClass, disabled }) => {
  return (
    <a
      href={link}
      className={`btn card p-6 rounded-lg shadow-md transition-all duration-300 ${hoverClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h6 className="text-xl font-semibold mb-2">{title}</h6>
      <p className="text-gray-300">{description}</p>
    </a>
  );
};

export default ServiceCard;