import mongoose, { Document, Schema } from 'mongoose';

export interface IMovie extends Document {
    name: string;
    releaseDate: Date;
    averageRating?: number | null;
}

const movieSchema: Schema = new Schema({
    name: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    averageRating: { type: Number, default: null },
});

const Movie = mongoose.model<IMovie>('Movie', movieSchema);
export default Movie;
