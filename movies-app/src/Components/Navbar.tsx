import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Logo */}
        <div className="text-gray-700 text-2xl font-bold">
          MyLogo
        </div>

        {/* Buttons */}
        <div className="space-x-4 mt-4 sm:mt-0">
          <button className="text-purple-600 border border-purple-600 px-4 py-2 rounded hover:bg-purple-50 transition">
            Add new movie
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
            Add new review
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
