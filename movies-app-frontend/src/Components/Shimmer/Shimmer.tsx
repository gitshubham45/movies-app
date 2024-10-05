import React from 'react';

const Shimmer: React.FC = () => {
  return (
    <div className="animate-pulse space-y-4 p-4">
      <div className="h-6 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
    </div>
  );
};

export default Shimmer;
