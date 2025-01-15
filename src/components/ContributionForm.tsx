import React, { useState } from 'react';

const ContributionForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resource, setResource] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your contribution!');
    setName('');
    setEmail('');
    setResource('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none mb-4"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none mb-4"
        required
      />
      <textarea
        value={resource}
        onChange={(e) => setResource(e.target.value)}
        placeholder="Describe your contribution..."
        className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none mb-4"
        rows={5}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default ContributionForm;