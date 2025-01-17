import React from 'react';

const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Community
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect with other ESI students and alumni.
            </p>
          </div>
        </div>
      </div>

      {/* Community Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h2>Forums</h2>
          <p>Join our forums to discuss topics, ask questions, and share resources.</p>
          <h2>Study Groups</h2>
          <p>Form study groups with other students to collaborate on projects and exams.</p>
          <h2>Events</h2>
          <p>Participate in community events, workshops, and meetups.</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join?</h2>
          <p className="text-xl mb-8">Become a part of the ESIHUB community today.</p>
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

export default Community;