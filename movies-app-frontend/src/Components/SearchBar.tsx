import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="my-6">
      <input
        type="text"
        placeholder="🔍 Search for your favourite movie"
        className="border-2 border-purple-500 p-2 w-full rounded-lg focus:outline-none focus:border-purple-700"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
