import React from 'react';
import ReviewCard from '../Components/ReviewCard';

interface MovieReviewPageProps {
  title: string;
  averageRating: number;
  reviews: Array<{
    text: string;
    reviewer: string;
    rating: number;
  }>;
  onEditReview: (index: number) => void;
  onDeleteReview: (index: number) => void;
}

const MovieReviewPage: React.FC<MovieReviewPageProps> = ({
  title,
  averageRating,
  reviews,
  onEditReview,
  onDeleteReview,
}) => {
  return (
    <div className="container mx-auto p-4" style={{ maxHeight: 'calc(100vh - 100px)' }}>
      <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-10 shadow">
        <h1 className="text-3xl font-light text-gray-800">
          {title}
        </h1>
        <p className="text-xl text-purple-600 font-semibold">
          {averageRating.toFixed(1)}/10
        </p>
      </div>

      <div className="mt-6 space-y-4 hide-scrollbar">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            reviewText={review.text}
            reviewerName={review.reviewer}
            rating={review.rating}
            onEdit={() => onEditReview(index)}
            onDelete={() => onDeleteReview(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieReviewPage;
