import React, { useState, useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';

const AddReviewForm: React.FC = () => {
  const { movies, addReview } = useContext(MovieContext); 
  const [movieId, setMovieId] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState<string | ''>("");
  const [reviewComments, setReviewComments] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addReview({ movieId, reviewerName, rating, reviewComments }); 

    console.log(movieId);

    setMovieId('');
    setReviewerName('');
    setRating("");
    setReviewComments('');
  };

  return (
    <div className="w-full max-w-lg">
      <h2 className="text-left text-xl font-semibold mb-6">Add New Review</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <select
            name="movie"
            value={movieId}
            onChange={(e) => setMovieId(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>Select a movie</option>
            {movies.map((movie) => (
              <option key={movie._id} value={movie._id}>{movie.name}</option> 
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            name="reviewerName"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            placeholder="Your Name"
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
              if (value >= 1 && value <= 10) {
                setRating(value.toString());
              } else if (e.target.value === '') {
                setRating(""); 
              }
            }}
            placeholder="Rating out of 10"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <textarea
            name="comments"
            value={reviewComments}
            onChange={(e) => setReviewComments(e.target.value)}
            placeholder="Review Comments"
            className="w-full p-3 border border-gray-300 rounded h-32 resize-none"
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
