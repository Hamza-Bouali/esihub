import React from 'react';
import FAQItem from '../components/FAQItem';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'How do I access DOCESI?',
      answer: 'DOCESI can be accessed through the Google Drive link provided on the homepage.',
    },
    {
      question: 'Where can I find internship reports?',
      answer: 'Internship reports are available in the REPORTESI section.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">FAQ</h1>
          <p className="text-xl mb-8">Frequently asked questions about ESIHUB.</p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;