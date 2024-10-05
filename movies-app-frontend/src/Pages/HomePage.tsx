// src/pages/HomePage.tsx
import React, { useContext, useEffect, useState } from 'react';
import SearchBar from '../Components/SearchBar';
import MovieCard from '../Components/MovieCard';
import Shimmer from '../Components/Shimmer/Shimmer';
import { MovieContext } from '../Context/MovieContext';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { movies, getMovies , loading, handleMovieClick } = useContext(MovieContext); 
  const [searchQuery, setSearchQuery] = useState('');

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    getMovies();
  }, []); 

  const filteredMovies = movies.filter((movie) =>
    movie?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800">The best movie reviews site!</h1>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-purple-100 p-4 rounded-lg shadow-md">
              <Shimmer />
            </div>
          ))
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie._id}
              title={movie.name}
              movieId = {movie._id}
              releaseDate={formatDate(movie.releaseDate)}
              rating={movie?.averageRating?.toString()}
              handleMovieClick={() => {
                navigate(`/movie-review`);
                 handleMovieClick(movie)
                }
              }
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
