import { Router, Request, Response } from 'express';
import Review from '../models/Review';
import Movie from '../models/Movie';


const router = Router();



router.post('/', async (req: any, res: any) => {
    try {
        const review = new Review(req.body);
        const { rating, movieId } = req.body;

        if (rating && parseInt(rating) > 0) {
            const movie = await Movie.findById(movieId);

            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }

            const reviews = await Review.find({ movieId });

            let newRating;
            const numReviews = reviews.length;

            if (numReviews === 0) {
                newRating = parseInt(rating);
            } else {
                newRating = ((5 * numReviews) + parseInt(rating)) / (numReviews + 1);
            }

            movie.averageRating = newRating;

            await movie.save();
        }

        await review.save();

        return res.status(201).json(review);
    } catch (error) {
        console.error('Error creating review:', error); // Log the error for debugging
        return res.status(500).json({ message: 'Failed to create review', error });
    }
});



// Read all reviews for a specific movie
router.get('/:movieId', async (req: any, res: any) => {
    try {
        const movieId = req.params.movieId;
        console.log(`Fetching reviews for movie ID: ${movieId}`);

        const reviews = await Review.find({ movieId });

        console.log(reviews)

        if (!reviews || reviews.length === 0) {
            return res.status(404).json({ message: 'No reviews found for this movie' });
        }

        return res.status(200).json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return res.status(500).json({ message: 'Failed to fetch reviews', error });
    }
});

router.put('/:id', async (req: any, res: any) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        return res.status(200).json(review);  
    } catch (error) {
        console.error('Error updating review:', error);
        return res.status(500).json({ message: 'Failed to update review', error });
    }
});

// Delete a review
router.delete('/:reviewId', async (req: any, res: any) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.reviewId);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        return res.status(200).json({ message: 'Review deleted successfully' }); 
    } catch (error) {
        console.error('Error deleting review:', error);
        return res.status(500).json({ message: 'Failed to delete review', error });
    }
});

export default router;
