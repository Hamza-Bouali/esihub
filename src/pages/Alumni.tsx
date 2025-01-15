import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AlumniCard from '../components/AlumniCard';
import AchievementCard from '../components/AchievementCard'; // New component for achievements

const Alumni: React.FC = () => {
  const alumni = [
    {
      name: 'John Doe',
      role: 'Software Engineer',
      company: 'Google',
      link: 'https://example.com',
    },
    {
      name: 'Jane Smith',
      role: 'Data Scientist',
      company: 'Facebook',
      link: 'https://example.com',
    },
  ];

  const achievements = [
    {
      title: 'Hackathon Winner 2023',
      description: 'Won first place in the National Coding Hackathon.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Best Research Paper',
      description: 'Published a groundbreaking research paper in AI.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      title: 'Sports Championship',
      description: 'Led the ESI team to victory in the inter-university sports championship.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-5">
        {/* Alumni Section */}
        <h2 className="text-center text-3xl font-bold">Alumni Network</h2>
        <p className="text-center pb-4 border-b border-gray-700">Connect with ESI alumni.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          {alumni.map((alumnus, index) => (
            <AlumniCard
              key={index}
              name={alumnus.name}
              role={alumnus.role}
              company={alumnus.company}
              link={alumnus.link}
            />
          ))}
        </div>

        {/* Achievements Section */}
        <h2 className="text-center text-3xl font-bold mt-12">Student Achievements</h2>
        <p className="text-center pb-4 border-b border-gray-700">Celebrating our students' success.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              description={achievement.description}
              image={achievement.image}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Alumni;