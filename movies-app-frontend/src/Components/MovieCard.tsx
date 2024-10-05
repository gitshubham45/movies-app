import React, { useContext } from 'react';
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { MovieContext } from '../Context/MovieContext';

interface MovieCardProps {
  title: string;
  releaseDate: string;
  rating: string;
  movieId: string;
  handleMovieClick: () => void; 
}

const MovieCard: React.FC<MovieCardProps> = ({ title, movieId , releaseDate, rating, handleMovieClick }) => {

  const { deleteMovie, editMovie } = useContext(MovieContext);

  const handleEditClick = (event: React.MouseEvent) => {
    event.stopPropagation(); 
    editMovie(movieId); 
  };

  const handleDeleteClick = (event: React.MouseEvent) => {
    event.stopPropagation(); 
    deleteMovie(movieId); 
  };

  return (
    <div
      className="bg-purple-100 p-4 rounded-lg shadow-md cursor-pointer" 
      onClick={handleMovieClick} 
    >
      <div className="text-left">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">Released: {releaseDate}</p>
        <p className="mt-2 font-semibold">Rating: {parseInt(rating) > 0 ? `${parseInt(rating).toFixed(1)}/10` : ""}</p>
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <button onClick={handleEditClick} className="text-gray-600 hover:text-gray-800">
          <FiEdit />
        </button>
        <button onClick={handleDeleteClick} className="text-gray-600 hover:text-gray-800">
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
