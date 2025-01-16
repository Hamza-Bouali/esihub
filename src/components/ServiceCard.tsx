import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  hoverClass: string;
  disabled?: boolean;
  icon?: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link, hoverClass, disabled, icon }) => {
  return (
    <a
      href={link}
      className={`bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 ${hoverClass} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h6 className="text-xl font-semibold mb-2">{title}</h6>
      <p className="text-gray-300">{description}</p>
    </a>
  );
};

export default ServiceCard;