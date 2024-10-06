"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Review_1 = __importDefault(require("../models/Review"));
const Movie_1 = __importDefault(require("../models/Movie"));
const router = (0, express_1.Router)();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = new Review_1.default(req.body);
        const { rating, movieId } = req.body;
        if (rating && parseInt(rating) > 0) {
            const movie = yield Movie_1.default.findById(movieId);
            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }
            const reviews = yield Review_1.default.find({ movieId });
            let newRating;
            const numReviews = reviews.length;
            if (numReviews === 0) {
                newRating = parseInt(rating);
            }
            else {
                newRating = ((5 * numReviews) + parseInt(rating)) / (numReviews + 1);
            }
            movie.averageRating = newRating;
            yield movie.save();
        }
        yield review.save();
        return res.status(201).json(review);
    }
    catch (error) {
        console.error('Error creating review:', error); // Log the error for debugging
        return res.status(500).json({ message: 'Failed to create review', error });
    }
}));
// Read all reviews for a specific movie
router.get('/:movieId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movieId = req.params.movieId;
        console.log(`Fetching reviews for movie ID: ${movieId}`);
        const reviews = yield Review_1.default.find({ movieId });
        console.log(reviews);
        if (!reviews || reviews.length === 0) {
            return res.status(404).json({ message: 'No reviews found for this movie' });
        }
        return res.status(200).json(reviews);
    }
    catch (error) {
        console.error('Error fetching reviews:', error);
        return res.status(500).json({ message: 'Failed to fetch reviews', error });
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield Review_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        return res.status(200).json(review);
    }
    catch (error) {
        console.error('Error updating review:', error);
        return res.status(500).json({ message: 'Failed to update review', error });
    }
}));
// Delete a review
router.delete('/:reviewId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield Review_1.default.findByIdAndDelete(req.params.reviewId);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        return res.status(200).json({ message: 'Review deleted successfully' });
    }
    catch (error) {
        console.error('Error deleting review:', error);
        return res.status(500).json({ message: 'Failed to delete review', error });
    }
}));
exports.default = router;
