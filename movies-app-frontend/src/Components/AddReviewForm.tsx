import React, { useState } from 'react';

const AddReviewForm: React.FC = () => {
  const [movie, setMovie] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState<number | ''>(1);
  const [comments, setComments] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({ movie, reviewerName, rating, comments });
  };

  return (
    <div className="w-full max-w-lg">
      {/* Header on the left */}
      <h2 className="text-left text-xl font-semibold mb-6">Add New Review</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <select
            name="movie"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>Select a movie</option>
            <option value="star-wars">Star Wars</option>
            <option value="top-gun">Top Gun</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            name="reviewerName"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            placeholder="Your Name" // Placeholder instead of naming
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <input
            type="number"
            min="1"
            max="10"
            name="rating"
            value={rating}
            onChange={(e) => {
              const value = Number(e.target.value);
              // Allow only numbers between 1 and 10
              if (value >= 1 && value <= 10) {
                setRating(value);
              } else if (e.target.value === '') {
                setRating(''); // Allow clearing the input
              }
            }}
            placeholder="Rating out of 10" // Placeholder for the rating field
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <textarea
            name="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Review Comments" // Placeholder instead of naming
            className="w-full p-3 border border-gray-300 rounded h-32 resize-none" // Increased height for textarea
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-purple-600 text-white p-2 w-1/2 rounded hover:bg-purple-700 transition"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;
