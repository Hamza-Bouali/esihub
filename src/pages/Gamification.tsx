import React from 'react';
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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Gamification</h1>
          <p className="text-xl mb-8">Earn badges and rewards for your contributions!</p>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <BadgeCard
              key={index}
              title={badge.title}
              description={badge.description}
              icon={badge.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gamification;