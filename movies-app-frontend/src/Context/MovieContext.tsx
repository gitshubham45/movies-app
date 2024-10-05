import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Movie {
    _id: string;
    name: string;
    releaseDate: string;
    averageRating: string;
}

interface Review {
    movieId: string;
    reviewerName: string;
    rating: string; 
    reviewComments: string;
}

interface MovieContextProps {
    movie: Movie | null;
    setMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
    movies: Movie[];
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    deleteMovie : any; 
    editMovie : any
    reviews: Review[];
    setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
    loading: boolean;
    reviewPageLoading: boolean;
    addMovie: (newMovie: Omit<Movie, '_id' | 'averageRating'>) => void;
    addReview: (newReview: Review) => void;
    getMovies: () => void;
    getMovie: (movieId: string) => void;
    getReviews: () => void;
    handleMovieClick: (movie: Movie) => void;
    selectedMovie: Movie | null;
    setSelectedMovie: React.Dispatch<React.SetStateAction<Movie | null>>;
}

export const MovieContext = createContext<MovieContextProps>({
    movie: null,
    setMovie: () => { },
    movies: [],
    setMovies: () => { },
    deleteMovie : () => { },
    editMovie : () => {},
    reviews: [],
    setReviews: () => { },
    loading: true,
    reviewPageLoading: true,
    addMovie: () => { },
    addReview: () => { },
    getMovies: () => { },
    getMovie: () => { }, // Placeholder for the new function
    getReviews: () => { },
    handleMovieClick: () => { },
    selectedMovie: null,
    setSelectedMovie: () => { },
});

export const MovieProvider = ({ children }: { children: ReactNode }) => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [reviewPageLoading, setReviewPageLoading] = useState(true);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const apiUrl = process.env.REACT_APP_API_URL;
    const apiPort = process.env.REACT_APP_API_PORT;

    // Fetch all movies from API
    const getMovies = async () => {
        const endpoint = `${apiUrl}:${apiPort}/api/movies`;

        try {
            const response = await axios.get(endpoint);
            setMovies(response.data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    };


    // Function to add a new movie
    const addMovie = async (newMovie: Omit<Movie, '_id' | 'averageRating'>) => {
        try {
            const response = await axios.post(`${apiUrl}:${apiPort}/api/movies`, newMovie);
            setMovies((prevMovies) => [...prevMovies, response.data]);
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    // Function to fetch a single movie by ID
    const getMovie = async (movieId: string) => {
        try {
            const response = await axios.get(`${apiUrl}:${apiPort}/api/movies/${movieId}`);
            await setMovie(response.data); // Set the fetched movie in the state
        } catch (error) {
            console.error('Error fetching movie:', error);
        }
    };

    // Delete movie 
    const deleteMovie = async (movieId: string) => {
        try {
            const response = await axios.delete(`${apiUrl}:${apiPort}/api/movies/${movieId}`);
            getMovies();
            await setMovie(response.data); // Set the fetched movie in the state
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    };

     // edit movie 
     const editMovie = async (movieId: string) => {
        try {
            const response = await axios.put(`${apiUrl}:${apiPort}/api/movies/${movieId}`);
            getMovies();
            await setMovie(response.data); // Set the fetched movie in the state
        } catch (error) {
            console.error('Error updating movie:', error);
        }
    };


    // Fetch reviews based on selected movie
    const getReviews = async () => {
        if (selectedMovie) {
            try {
                const response = await axios.get(`${apiUrl}:${apiPort}/api/reviews/${selectedMovie._id}`);
                setReviews(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            } finally {
                setReviewPageLoading(false);
            }
        }
    };

    // Function to add a new review
    const addReview = async (newReview: Review) => {
        try {
            const response = await axios.post(`${apiUrl}:${apiPort}/api/reviews`, newReview);
            setReviews((prevReviews) => [...prevReviews, response.data]);
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    // Function to add a new review
    const deleteReview = async (reviewId: string) => {
        try {
            const response = await axios.delete(`${apiUrl}:${apiPort}/api/reviews/${reviewId}`);
            getReviews();
        } catch (error) {
            console.error('Error deleting review:', error);
        }
    };



    // Handle movie click to set selected movie and fetch reviews
    const handleMovieClick = (movie: Movie) => {
        setSelectedMovie(movie);
        getReviews();
        getMovie(movie._id)
    };

    return (
        <MovieContext.Provider
            value={{
                movie,
                setMovie,
                movies,
                setMovies,
                deleteMovie,
                editMovie,
                reviews,
                setReviews,
                loading,
                reviewPageLoading,
                addMovie,
                addReview,
                getMovies,
                getMovie,
                getReviews,
                handleMovieClick,
                selectedMovie,
                setSelectedMovie,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};
