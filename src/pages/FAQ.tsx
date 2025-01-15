import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
      <Navbar />
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">FAQ</h2>
        <p className="text-center pb-4 border-b border-gray-700">Frequently asked questions about ESIHUB.</p>

        <div className="space-y-4 py-5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;