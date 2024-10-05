import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import MovieCard from '../Components/MovieCard';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {

  const navigate = useNavigate(); // Updated to useNavigate

  const handleMovieClick = () => {
    navigate('/movie-review'); // Use navigate to go to the MovieReviewPage
  };

  const [searchQuery, setSearchQuery] = useState('');
  const movies = [
    { title: 'Star Wars: A New Hope', releaseDate: '1st August, 2022', rating: 8.33 },
    { title: 'Top GUn', releaseDate: '1st August, 2022', rating: 9 },
    // Add more movies here
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">The best movie reviews site!</h1>

      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Movie Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            releaseDate={movie.releaseDate}
            rating={movie.rating}
            onEdit={() => console.log(`Edit movie: ${movie.title}`)}
            onDelete={() => console.log(`Delete movie: ${movie.title}`)}
            handleMovieClick={handleMovieClick}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
