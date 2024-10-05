import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import MovieReviewPage from './Pages/MovieReviewPage';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/movie-review/" element={
            <MovieReviewPage />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
