import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Share your feedback..."
        className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
        rows={5}
        required
      />
      <button
        type="submit"
        className="mt-4 bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;