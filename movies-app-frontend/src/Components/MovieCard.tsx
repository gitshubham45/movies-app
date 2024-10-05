import React from 'react';
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

interface MovieCardProps {
  title: string;
  releaseDate: string;
  rating: number;
  onEdit: () => void;
  onDelete: () => void;
  handleMovieClick: () => void; // Ensure this is defined in props
}

const MovieCard: React.FC<MovieCardProps> = ({ title, releaseDate, rating, onEdit, onDelete, handleMovieClick }) => {
  return (
    <div
      className="bg-purple-100 p-4 rounded-lg shadow-md cursor-pointer" // Add cursor-pointer for feedback
      onClick={handleMovieClick} // Call handleMovieClick on card click
    >
      {/* Align text to the left */}
      <div className="text-left">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">Released: {releaseDate}</p>
        <p className="mt-2 font-semibold">Rating: {rating >0 ? `${rating.toFixed(1)}/10` : ""}</p>
      </div>

      {/* Action buttons at the bottom */}
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

export default MovieCard;
