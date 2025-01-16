import React from 'react';
import EventCard from '../components/EventCard';

const Events: React.FC = () => {
  const events = [
    {
      title: 'Coding Workshop',
      date: 'October 15, 2023',
      description: 'Learn the basics of Python programming.',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Career Fair',
      date: 'November 1, 2023',
      description: 'Meet top companies and explore job opportunities.',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl mb-8">Stay updated with the latest events at ESI.</p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
              link={event.link}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;