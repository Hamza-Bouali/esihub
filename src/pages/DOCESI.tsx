import React from 'react';

const DOCESI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              DOCESI
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Exams, Courses, Summaries & more.
            </p>
          </div>
        </div>
      </div>

      {/* DOCESI Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* ICD Section */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">ICD</h2>
            <div className="space-y-4">
              <a
                href="https://bit.ly/3Mj81fX"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Cursus
              </a>
              <a
                href="https://bit.ly/3DJVL3J"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                S1 Courses
              </a>
              {/* Add more links */}
            </div>
          </div>

          {/* ICSD Section */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">ICSD</h2>
            <div className="space-y-4">
              <a
                href="https://bit.ly/3DM2YRq"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                S1 Courses
              </a>
              {/* Add more links */}
            </div>
          </div>

          {/* ISSIC Section */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">ISSIC</h2>
            <div className="space-y-4">
              <a
                href="https://bit.ly/couresi-s1-issic"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                S1 Courses
              </a>
              {/* Add more links */}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need More Resources?</h2>
          <p className="text-xl mb-8">Explore our comprehensive collection of study materials.</p>
          <a
            href="/resources"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Explore Resources
          </a>
        </div>
      </div>
    </div>
  );
};

export default DOCESI;