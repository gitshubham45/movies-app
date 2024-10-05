import React, { useContext } from 'react';
import ReviewCard from '../Components/ReviewCard';
import { MovieContext } from '../Context/MovieContext';
import ReviewPageShimmer from '../Components/Shimmer/ReviewPageShimmer'; // Import your shimmer component



const MovieReviewPage = () => {
  const { selectedMovie, reviews, reviewPageLoading } = useContext(MovieContext);

  console.log(reviews)

  return (
    <div className="container mx-auto p-4" style={{ maxHeight: 'calc(100vh - 100px)' }}>
      <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10 shadow">
        <h1 className="text-3xl font-light text-gray-800">
          {selectedMovie?.name}
        </h1>
        {selectedMovie?.averageRating && (
          <p className="text-xl text-purple-600 font-semibold">
            {selectedMovie?.averageRating}/10
          </p>
        )}
      </div>

      {/* Render shimmer if loading */}
      {reviewPageLoading ? (
        <ReviewPageShimmer />
      ) : (
        <div className="mt-6 space-y-4 hide-scrollbar">
          {
            reviews.map((review, index) => (
              <ReviewCard
                key={index}
                reviewText={review?.reviewComments}
                reviewerName={review?.reviewerName}
                rating={review?.rating?.toString()}
              />
            ))}
         
        </div>
      )}
    </div>
  );
};

export default MovieReviewPage;
