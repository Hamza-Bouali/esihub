import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

const Events: React.FC = () => {
  const events = [
    {
      title: 'Coding Workshop',
      date: 'October 15, 2023',
      description: 'Learn the basics of Python programming.',
      link: 'https://example.com',
    },
    {
      title: 'Career Fair',
      date: 'November 1, 2023',
      description: 'Meet top companies and explore job opportunities.',
      link: 'https://example.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">Events</h2>
        <p className="text-center pb-4 border-b border-gray-700">Upcoming events for ESI students.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
              link={event.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Events;