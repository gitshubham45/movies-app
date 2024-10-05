import React, { useState } from 'react';
import axios from 'axios';

const AddMovieForm: React.FC = () => {
  const [name, setName] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, releaseDate });

  };

  return (
    <div className="w-full max-w-lg">
      <h2 className="text-left text-xl font-semibold mb-6">Add New Movie</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Movie Name" 
            className="w-full p-3 border border-gray-300 rounded" // Increased padding for height
            required
          />
        </div>
        <div>
          <input 
            type="text" 
            onFocus={(e) => (e.target.type = 'date')} 
            onBlur={(e) => (e.target.type = e.target.value ? 'date' : 'text')}  
            value={releaseDate} 
            onChange={(e) => setReleaseDate(e.target.value)} 
            placeholder="Release Date"  
            className="w-full p-3 border border-gray-300 rounded" 
            required
          />
        </div>

        <div className="flex justify-end">
          <button 
            type="submit" 
            className="bg-purple-600 text-white p-2 w-1/2 rounded hover:bg-purple-700 transition"
          >
            Create Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
