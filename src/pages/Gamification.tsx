import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BadgeCard from '../components/BadgeCard';

const Gamification: React.FC = () => {
  const badges = [
    {
      title: 'Top Contributor',
      description: 'Awarded for uploading the most resources.',
      icon: '🏆',
    },
    {
      title: 'Quiz Master',
      description: 'Awarded for scoring high on quizzes.',
      icon: '🧠',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">Gamification</h2>
        <p className="text-center pb-4 border-b border-gray-700">Earn badges and rewards!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          {badges.map((badge, index) => (
            <BadgeCard
              key={index}
              title={badge.title}
              description={badge.description}
              icon={badge.icon}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gamification;