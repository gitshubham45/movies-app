import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import moviesRouter from './routes/movies';
import reviewsRouter from './routes/reviews';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(`${mongoUri}`)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json("hello world!");
})

app.use('/api/movies', moviesRouter);
app.use('/api/reviews', reviewsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
