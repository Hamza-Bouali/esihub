import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPostCard from '../components/BlogPostCard';

const Blog: React.FC = () => {
  const posts = [
    {
      title: 'How to Ace Your Exams',
      author: 'Khalid KASSI',
      date: 'October 10, 2023',
      description: 'Tips and tricks for effective exam preparation.',
      link: 'https://example.com',
    },
    {
      title: 'Getting Started with React',
      author: 'Achraf SANI',
      date: 'October 5, 2023',
      description: 'A beginner’s guide to React development.',
      link: 'https://example.com',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-5">
        <h2 className="text-center text-3xl font-bold">Blog</h2>
        <p className="text-center pb-4 border-b border-gray-700">Insights and tips from the ESIHUB community.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          {posts.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              author={post.author}
              date={post.date}
              description={post.description}
              link={post.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;