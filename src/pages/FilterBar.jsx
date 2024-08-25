import React from "react";

const FilterBar = ({
  genres,
  selectedGenre,
  setSelectedGenre,
  setSearchTerm,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 p-4">
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        className="p-2 bg-gray-800 text-white border border-gray-700 rounded-md"
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Search by year"
        className="p-2 bg-gray-800 text-white border border-gray-700 rounded-md"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="p-2 bg-gray-800 text-white border border-gray-700 rounded-md"
      >
        <option value="">Sort By</option>
        <option value="rating">Rating (High to Low)</option>
        <option value="runtime">Runtime (High to Low)</option>
      </select>
    </div>
  );
};

export default FilterBar;
