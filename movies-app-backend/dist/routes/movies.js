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
// Create a movie
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = new Movie_1.default(req.body);
        yield movie.save();
        res.status(201).json(movie);
    }
    catch (error) {
        console.error('Error creating movie:', error);
        res.status(500).json({ message: 'Failed to create movie', error });
    }
}));
// Read all movies
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movies = yield Movie_1.default.find();
        res.json(movies);
    }
    catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ message: 'Failed to fetch movies', error });
    }
}));
// Get one movie
router.get('/:movieId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movieId = req.params.movieId;
        const movie = yield Movie_1.default.findById(movieId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    }
    catch (error) {
        console.error('Error fetching movie:', error);
        res.status(500).json({ message: 'Failed to fetch movie', error });
    }
}));
// Update a movie
router.put('/:movieId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = yield Movie_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    }
    catch (error) {
        console.error('Error updating movie:', error);
        res.status(500).json({ message: 'Failed to update movie', error });
    }
}));
// Delete a movie and its reviews
router.delete('/:movieId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Review_1.default.deleteMany({ movieId: req.params.movieId });
        const movie = yield Movie_1.default.findByIdAndDelete(req.params.movieId);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    }
    catch (error) {
        console.error('Error deleting movie:', error);
        res.status(500).json({ message: 'Failed to delete movie', error });
    }
}));
exports.default = router;
