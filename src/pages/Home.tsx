import React from 'react';
import { Book, Code, GraduationCap, Layout, Palette, FileText, Trophy, Users } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'DOCESI',
      description: 'Access course materials, past exam papers, and comprehensive study resources.',
      icon: <Book className="w-6 h-6" />,
      link: '/docs',
      badge: 'Popular'
    },
    {
      title: 'REPORTESI',
      description: 'Browse and learn from internship reports shared by ESI students.',
      icon: <FileText className="w-6 h-6" />,
      link: 'https://bit.ly/3b76CLg',
      badge: 'New'
    },
    {
      title: 'LOGOESI',
      description: 'Create professional ESI logos with our custom design tool.',
      icon: <Palette className="w-6 h-6" />,
      link: '/logo'
    },
    {
      title: 'NOTESI',
      description: 'Track and manage your academic performance efficiently.',
      icon: <Trophy className="w-6 h-6" />,
      link: '/notes',
      disabled: true,
      badge: 'Coming Soon'
    }
  ];

  const features = [
    {
      title: 'Community Hub',
      description: 'Connect with fellow students and alumni',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Learning Resources',
      description: 'Access comprehensive study materials',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: 'Developer Tools',
      description: 'Essential tools for coding projects',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'Modern Interface',
      description: 'Intuitive and responsive design',
      icon: <Layout className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Welcome to ESIHUB
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your comprehensive platform for resources, tools, and community engagement
            </p>
            <a
              href="/donation"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              Support Us - Donate Now
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:transform hover:-translate-y-2 ${
                service.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">{service.icon}</div>
                {service.badge && (
                  <span className="px-3 py-1 text-sm bg-purple-600 rounded-full">
                    {service.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <a
                href={service.link}
                className={`inline-block w-full text-center py-2 rounded-lg ${
                  service.disabled
                    ? 'bg-gray-700 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                } transition-colors duration-300`}
              >
                {service.disabled ? 'Coming Soon' : 'Learn More'}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose ESIHUB?</h2>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join our community and access all resources today.</p>
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

export default Home;