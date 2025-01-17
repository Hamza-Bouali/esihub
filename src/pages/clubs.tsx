import React from 'react';
import { Link } from 'react-router-dom';

// Define the Club interface
interface Club {
  name: string;
  description: string;
  image: string;
  link: string;
}

// Sample data for clubs
const clubs: Club[] = [
  {
    name: 'Coding Club',
    description: 'A club for coding enthusiasts to learn, collaborate, and build projects.',
    image: 'https://via.placeholder.com/300',
    link: '/clubs/coding-club',
  },
  {
    name: 'Robotics Club',
    description: 'Explore the world of robotics and participate in competitions.',
    image: 'https://via.placeholder.com/300',
    link: '/clubs/robotics-club',
  },
  {
    name: 'Debate Society',
    description: 'Sharpen your public speaking and critical thinking skills.',
    image: 'https://via.placeholder.com/300',
    link: '/clubs/debate-society',
  },
  {
    name: 'Art Club',
    description: 'A space for artists to showcase their creativity and collaborate on projects.',
    image: 'https://via.placeholder.com/300',
    link: '/clubs/art-club',
  },
];

const ClubsAndAssociations: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Clubs and Associations
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore the diverse range of student organizations at our university.
            </p>
          </div>
        </div>
      </div>

      {/* Clubs Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Clubs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={club.image}
                alt={club.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{club.name}</h3>
              <p className="text-gray-400 mb-4">{club.description}</p>
              <Link
                to={club.link}
                className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Want to Start a Club?</h2>
          <p className="text-xl mb-8">
            Join or create a new club to connect with like-minded students.
          </p>
          <a
            href="/contribute"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClubsAndAssociations;