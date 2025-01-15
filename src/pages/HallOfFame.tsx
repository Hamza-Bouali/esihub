import React from 'react';
import HallOfFameCard from '../components/HallOfFameCard.tsx';

const HallOfFame: React.FC = () => {
  const contributors = [
    {
      name: 'Khalid KASSI',
      role: 'Founder',
      link: 'https://www.linkedin.com/in/Khalid9ASSI',
      year: '2019-2021',
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQEAU9Q11829mw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1657113862049?e=1742428800&v=beta&t=H-IbURjxpFkguMqPsQklOJeAUPnF-LFHeH1zR_nCumo', // Replace with actual image URL
    },
    {
      name: 'Achraf SANI',
      role: 'Maintainer',
      link: 'mailto:achraf.sani@esi.ac.ma',
      year: '2021-2024',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
        name:'Hamza Bouali',
        role:'Contributor & maintainer',
        year:'2024-present',
        link:'https://www.linkedin.com/in/hamza-bouali-0b4a8b1a3',
    }
    // Add more contributors here
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">Hall of Fame</h2>
        <p className="text-center pb-4 border-b border-gray-700">Recognizing the amazing contributors to ESIHUB.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
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
    </div>
  );
};

export default HallOfFame;