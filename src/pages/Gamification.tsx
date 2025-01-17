import React from 'react';
import BadgeCard from '../components/BadgeCard';
import { Trophy, Code, GraduationCap, Layout } from 'lucide-react';

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

  const features = [
    {
      title: 'Gamification',
      description: 'Earn badges and rewards for your contributions',
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      title: 'Learning Resources',
      description: 'Access comprehensive study materials',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: 'Tech Insights',
      description: 'Learn about the latest industry trends',
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: 'Modern Interface',
      description: 'Intuitive and responsive design',
      icon: <Layout className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Gamification
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Earn badges and rewards for your contributions!
            </p>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Badges</h2>
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

      {/* Features Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Participate in Gamification?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Earn Badges?</h2>
          <p className="text-xl mb-8">Start contributing and earn rewards today.</p>
          <div className="space-x-4">
            <a
              href="/signup"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Sign Up Now
            </a>
            <a
              href="/about"
              className="inline-block bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamification;