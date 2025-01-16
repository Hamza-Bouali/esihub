import React from 'react';

const DOCESI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">DOCESI</h1>
          <p className="text-xl mb-8">Exams, Courses, Summaries & more.</p>
        </div>
      </div>

      {/* DOCESI Content */}
      <div className="container mx-auto px-4 py-12">
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
    </div>
  );
};

export default DOCESI;