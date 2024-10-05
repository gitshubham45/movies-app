import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import MovieReviewPage from './Pages/MovieReviewPage';

function App() {
  const [reviews, setReviews] = useState([
    {
      text: 'This is the best movie ever! I really enjoyed it.',
      reviewer: 'Amitav Khandelwal',
      rating: 9,
    },
    {
      text: 'This is the best movie ever! I really enjoyed it.',
      reviewer: 'Amitav Khandelwal',
      rating: 8,
    },
    {
      text: 'This is the best movie ever! I really enjoyed it.',
      reviewer: 'Amitav Khandelwal',
      rating: 8,
    },
    {
      text: 'This is the best movie ever! I really enjoyed it.',
      reviewer: 'Amitav Khandelwal',
      rating: 8,
    },
    {
      text: 'This is the best movie ever! I really enjoyed it.',
      reviewer: 'Amitav Khandelwal',
      rating: 8,
    },
    {
      text: 'This is the best movie ever! I really enjoyed it.',
      reviewer: 'Amitav Khandelwal',
      rating: 8,
    },
  ]);

    const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0; 
  

  const handleEditReview = (index: number) => {
    console.log(`Edit review at index: ${index}`);
  };

  const handleDeleteReview = (index: number) => {
    setReviews((prevReviews) => prevReviews.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar outside of Routes to show on all pages */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/movie-review" element={
            <MovieReviewPage
              title="Star Wars: A New Hope"
              averageRating={averageRating} // Pass the average rating to the MovieReviewPage
              reviews={reviews}
              onEditReview={handleEditReview}
              onDeleteReview={handleDeleteReview}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
