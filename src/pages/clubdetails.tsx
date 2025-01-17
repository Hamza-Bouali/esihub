import React from 'react';
import { useParams } from 'react-router-dom';

interface Club {
  name: string;
  description: string;
  image: string;
  events: string[];
  contact: string;
}

const clubs: Club[] = [
  {
    name: 'Coding Club',
    description: 'A club for coding enthusiasts to learn, collaborate, and build projects.',
    image: 'https://via.placeholder.com/300',
    events: ['Hackathon 2023', 'Web Development Workshop'],
    contact: 'codingclub@university.edu',
  },
  {
    name: 'Robotics Club',
    description: 'Explore the world of robotics and participate in competitions.',
    image: 'https://via.placeholder.com/300',
    events: ['Robotics Competition 2023', 'AI Workshop'],
    contact: 'roboticsclub@university.edu',
  },
];

const ClubDetails: React.FC = () => {
  const { clubName } = useParams<{ clubName: string }>();
  const club = clubs.find((c) => c.name.toLowerCase().replace(/ /g, '-') === clubName);

  if (!club) {
    return <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">Club not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {club.name}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {club.description}
            </p>
          </div>
        </div>
      </div>

      {/* Club Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md">
          <img
            src={club.image}
            alt={club.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          <ul className="list-disc list-inside mb-6">
            {club.events.map((event, index) => (
              <li key={index} className="text-gray-400">
                {event}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-400">{club.contact}</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Join?</h2>
          <p className="text-xl mb-8">Become a part of the {club.name} community.</p>
          <a
            href="/signup"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClubDetails;