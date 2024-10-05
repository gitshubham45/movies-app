import React, { useState } from 'react';

const AddMovieForm: React.FC = () => {
  const [name, setName] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({ name, releaseDate });
  };

  return (
    <div className="w-full max-w-lg">
      {/* Header on the left */}
      <h2 className="text-left text-xl font-semibold mb-6">Add New Movie</h2>

      {/* Form */}
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
          {/* HTML5 date input does not support a placeholder. This will act as a workaround. */}
          <input 
            type="text" 
            onFocus={(e) => (e.target.type = 'date')}  // Changes type to date on focus
            onBlur={(e) => (e.target.type = e.target.value ? 'date' : 'text')}  // Retains date type if filled
            value={releaseDate} 
            onChange={(e) => setReleaseDate(e.target.value)} 
            placeholder="Release Date"  // Placeholder for the date field
            className="w-full p-3 border border-gray-300 rounded" // Increased padding for height
            required
          />
        </div>

        <div className="flex justify-end">
          {/* Submit button, half the size of input */}
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
