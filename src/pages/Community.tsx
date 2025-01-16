import React from 'react';

const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Community</h1>
          <p className="text-xl mb-8">Connect with other ESI students and alumni.</p>
        </div>
      </div>

      {/* Community Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-4xl mx-auto">
          <h2>Forums</h2>
          <p>Join our forums to discuss topics, ask questions, and share resources.</p>
          <h2>Study Groups</h2>
          <p>Form study groups with other students to collaborate on projects and exams.</p>
          <h2>Events</h2>
          <p>Participate in community events, workshops, and meetups.</p>
        </div>
      </div>
    </div>
  );
};

export default Community;