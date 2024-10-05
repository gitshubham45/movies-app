import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Modal from './Modal';
import AddMovieForm from './AddMovieForm';
import AddReviewForm from './AddReviewForm';

const Navbar: React.FC = () => {
  const [showMovieForm, setShowMovieForm] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleAddMovieClick = () => {
    setShowMovieForm(true);
  };

  const handleAddReviewClick = () => {
    setShowReviewForm(true);
  };

  const closeMovieModal = () => {
    setShowMovieForm(false);
  };

  const closeReviewModal = () => {
    setShowReviewForm(false);
  };

  return (
    <>
      <nav className="bg-gray-200 p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <Link to="/" className="text-gray-700 text-2xl font-bold">
            MyLogo
          </Link>

          <div className="space-x-4 mt-4 sm:mt-0">
            <button 
              className="text-purple-600 border border-purple-600 px-4 py-2 rounded hover:bg-purple-50 transition" 
              onClick={handleAddMovieClick}
            >
              Add new movie
            </button>
            <button 
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              onClick={handleAddReviewClick}
            >
              Add new review
            </button>
          </div>
        </div>
      </nav>

      <Modal isOpen={showMovieForm} onClose={closeMovieModal}>
        <AddMovieForm />
      </Modal>

      <Modal isOpen={showReviewForm} onClose={closeReviewModal}>
        <AddReviewForm />
      </Modal>
    </>
  );
};

export default Navbar;
