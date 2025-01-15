import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left focus:outline-none"
      >
        <h3 className="text-xl font-semibold">{question}</h3>
      </button>
      {isOpen && <p className="text-gray-400 mt-2">{answer}</p>}
    </div>
  );
};

export default FAQItem;