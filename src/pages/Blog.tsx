import React from 'react';
import BlogPostCard from '../components/BlogPostCard';

const Blog: React.FC = () => {
  const posts = [
    {
      title: 'How to Ace Your Exams',
      author: 'Khalid KASSI',
      date: 'October 10, 2023',
      description: 'Tips and tricks for effective exam preparation.',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Getting Started with React',
      author: 'Achraf SANI',
      date: 'October 5, 2023',
      description: 'A beginner’s guide to React development.',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl mb-8">Insights and tips from the ESIHUB community.</p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              author={post.author}
              date={post.date}
              description={post.description}
              link={post.link}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;