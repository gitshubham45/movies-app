import React from 'react';

const ReviewPageShimmer: React.FC = () => {
  return (
    <div className="shimmer-container">
      {/* Adjust the styles as needed to match your design */}
      <div className="shimmer-title"></div>
      <div className="shimmer-rating"></div>
      <div className="shimmer-review"></div>
      <div className="shimmer-review"></div>
      <div className="shimmer-review"></div>
    </div>
  );
};

export default ReviewPageShimmer;
