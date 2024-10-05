import React from 'react';
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

interface ReviewCardProps {
  reviewText: string;
  reviewerName?: string;
  rating: number;
  onEdit: () => void;
  onDelete: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewText, reviewerName, rating, onEdit, onDelete }) => {
  return (
    <div className="border-2 border-gray-300 p-4 mb-4 relative flex flex-col h-full justify-between transition-all duration-200 ease-in-out hover:shadow-lg ">
      {/* Rating positioned at the top right corner */}
      <span className="absolute top-2 right-2 font-semibold text-purple-600">
        {rating}/10
      </span>

      {/* Review text fills most of the space */}
      <div className="flex-grow">
        <p className="text-left text-sm md:text-base">{reviewText}</p>
      </div>

      {/* Writer name positioned at the very bottom */}
      <div className="mt-2">
        <p className="text-sm text-gray-500 text-left">
          By {reviewerName || 'Anonymous'}
        </p>
      </div>

      {/* Action buttons just above the bottom */}
      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={onEdit} className="text-gray-600 hover:text-gray-800">
          <FiEdit />
        </button>
        <button onClick={onDelete} className="text-gray-600 hover:text-gray-800">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;