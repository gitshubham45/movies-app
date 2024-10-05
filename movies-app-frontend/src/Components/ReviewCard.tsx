import React from 'react';
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

interface ReviewCardProps {
  reviewText: string;
  reviewerName?: string;
  rating: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewText, reviewerName, rating }) => {
  return (
    <div className="border-2 border-gray-300 p-4 mb-4 relative flex flex-col h-full justify-between transition-all duration-200 ease-in-out hover:shadow-lg ">
      <span className="absolute top-2 right-2 font-semibold text-purple-600">
        {rating}/10
      </span>

      <div className="flex-grow">
        <p className="text-left text-sm md:text-base">{reviewText}</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500 text-left">
          By {reviewerName || 'Anonymous'}
        </p>
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <button  className="text-gray-600 hover:text-gray-800">
          <FiEdit />
        </button>
        <button  className="text-gray-600 hover:text-gray-800">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
