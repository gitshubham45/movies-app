import { Router } from 'express';
import Review from '../models/Review';
import Movie from '../models/Movie';

const router = Router();

// Create a movie
router.post('/', async (req :any, res : any) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json(movie);
    } catch (error) {
        console.error('Error creating movie:', error);
        res.status(500).json({ message: 'Failed to create movie', error });
    }
});

// Read all movies
router.get('/', async (req :any, res : any) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ message: 'Failed to fetch movies', error });
    }
});

// Get one movie
router.get('/:movieId', async (req :any, res : any) => {
    try {
        const movieId = req.params.movieId;
        const movie = await Movie.findById(movieId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        console.error('Error fetching movie:', error);
        res.status(500).json({ message: 'Failed to fetch movie', error });
    }
});

// Update a movie
router.put('/:movieId',async (req :any, res : any) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        console.error('Error updating movie:', error);
        res.status(500).json({ message: 'Failed to update movie', error });
    }
});

// Delete a movie and its reviews
router.delete('/:movieId', async (req :any, res : any) => {
    try {
        await Review.deleteMany({ movieId: req.params.movieId});
        const movie = await Movie.findByIdAndDelete(req.params.movieId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        console.error('Error deleting movie:', error);
        res.status(500).json({ message: 'Failed to delete movie', error });
    }
});

export default router;
