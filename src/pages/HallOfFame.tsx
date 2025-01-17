import React from 'react';
import HallOfFameCard from '../components/HallOfFameCard';

const HallOfFame: React.FC = () => {
  const contributors = [
    {
      name: 'Khalid KASSI',
      role: 'Founder',
      link: 'https://www.linkedin.com/in/Khalid9ASSI',
      year: '2019-2021',
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQEAU9Q11829mw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1657113862049?e=1742428800&v=beta&t=H-IbURjxpFkguMqPsQklOJeAUPnF-LFHeH1zR_nCumo',
    },
    {
      name: 'Achraf SANI',
      role: 'Maintainer',
      link: 'mailto:achraf.sani@esi.ac.ma',
      year: '2021-2024',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Hamza Bouali',
      role: 'Contributor & Maintainer',
      year: '2024-present',
      link: 'https://www.linkedin.com/in/hamza-bouali-0b4a8b1a3',
      image: 'https://via.placeholder.com/150',
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
              Hall of Fame
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Celebrating the amazing contributors who made ESIHUB possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contributors Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Contributors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contributors.map((contributor, index) => (
            <HallOfFameCard
              key={index}
              name={contributor.name}
              role={contributor.role}
              year={contributor.year}
              link={contributor.link}
              image={contributor.image}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Be Featured?</h2>
          <p className="text-xl mb-8">Join the Hall of Fame by contributing to ESIHUB.</p>
          <a
            href="/contribute"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Contribute Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;