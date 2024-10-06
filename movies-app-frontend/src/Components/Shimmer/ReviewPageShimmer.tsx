import React from 'react';

const ReviewPageShimmer: React.FC = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3 , 4 , 5 ,6].map((_, index) => (
        <div key={index} className="border-2 border-gray-300 p-4 mb-4 relative flex flex-col h-full justify-between transition-all duration-200 ease-in-out hover:shadow-lg animate-pulse">
          
          {/* Shimmer for rating */}
          <span className="absolute top-2 right-2 bg-gray-300 rounded w-12 h-6"></span>
          
          {/* Shimmer for review text */}
          <div className="flex-grow">
            <div className="bg-gray-300 h-4 mb-2 w-full rounded"></div>
            <div className="bg-gray-300 h-4 mb-2 w-5/6 rounded"></div>
            <div className="bg-gray-300 h-4 mb-2 w-4/6 rounded"></div>
          </div>

          {/* Shimmer for reviewer name */}
          <div className="mt-2">
            <div className="bg-gray-300 h-4 w-32 rounded"></div>
          </div>

          {/* Shimmer for buttons */}
          <div className="mt-4 flex justify-end space-x-2">
            <div className="bg-gray-300 w-8 h-8 rounded-full"></div>
            <div className="bg-gray-300 w-8 h-8 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewPageShimmer;
