import React from 'react';
import AlumniCard from '../components/AlumniCard';
import { Users, GraduationCap, Code, Layout } from 'lucide-react';

const Alumni: React.FC = () => {
  const alumni = [
    {
      name: 'John Doe',
      role: 'Software Engineer',
      company: 'Google',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      role: 'Data Scientist',
      company: 'Facebook',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const features = [
    {
      title: 'Alumni Network',
      description: 'Connect with successful ESI graduates',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Career Guidance',
      description: 'Get advice from experienced professionals',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: 'Tech Insights',
      description: 'Learn about the latest industry trends',
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: 'Modern Interface',
      description: 'Intuitive and responsive design',
      icon: <Layout className="w-6 h-6" />,
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
              Alumni Network
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect with ESI alumni and explore their success stories.
            </p>
          </div>
        </div>
      </div>

      {/* Alumni Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Alumni</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((alumnus, index) => (
            <AlumniCard
              key={index}
              name={alumnus.name}
              role={alumnus.role}
              company={alumnus.company}
              link={alumnus.link}
              image={alumnus.image}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Join the Alumni Network?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl mb-8">Join our alumni network and expand your professional circle.</p>
          <div className="space-x-4">
            <a
              href="/signup"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Sign Up Now
            </a>
            <a
              href="/about"
              className="inline-block bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;