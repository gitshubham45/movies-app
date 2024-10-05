import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
    movieId: mongoose.Types.ObjectId;
    reviewerName?: string;
    rating: number;
    reviewComments: string;
}

const reviewSchema: Schema = new Schema({
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    reviewerName: { type: String, default: null },
    rating: { type: String , required: true, min: 1, max: 10 },
    reviewComments: { type: String, required: true },
});

const Review = mongoose.model<IReview>('Review', reviewSchema);
export default Review;
