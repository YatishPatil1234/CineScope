import React from "react";

const MovieCard = ({ movie }) => {
  const {
    Poster,
    Title,
    Year,
    Genre,
    Director,
    Actors,
    Runtime,
    Language,
    Ratings,
    Country,
    Released,
    Awards,
  } = movie;

  return (
    <div className="bg-gray-900 dark:bg-gray-800 text-white  border-blue-500 dark:text-gray-200 border-2 dark:border-gray-600 rounded-lg overflow-hidden shadow-md flex flex-col h-full max-w-xs mx-auto">
      <img src={Poster} alt={Title} className="w-full h-64 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2">{Title}</h3>
        <p className="text-gray-300 dark:text-gray-400 text-sm mb-2">
          {Year} • {Genre}
        </p>

        <div className="text-gray-300 dark:text-gray-400 text-sm mb-4">
          <p className="mb-1">
            <strong>Director:</strong> {Director || "N/A"}
          </p>
          <p className="mb-1">
            <strong>Awards:</strong> {Awards || "N/A"}
          </p>
          <p className="mb-1">
            <strong>Cast:</strong> {Actors || "N/A"}
          </p>
          <p className="mb-1">
            <strong>Runtime:</strong> {Runtime || "N/A"}
          </p>
          <p className="mb-1">
            <strong>Language:</strong> {Language || "N/A"}
          </p>
          <p className="mb-1">
            <strong>Country:</strong> {Country || "N/A"}
          </p>
          <p className="mb-1">
            <strong>Released Date:</strong> {Released || "N/A"}
          </p>
          {Ratings && Ratings.length > 0 && (
            <p>
              <strong>Rating:</strong> {Ratings[0].Value}
            </p>
          )}
        </div>
        <div className="flex justify-between mt-4">
          <a
            href={`https://www.imdb.com/title/${movie.imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white bg-blue-500 dark:bg-blue-600 rounded p-2 text-center hover:text-red-500 dark:hover:text-red-400 transition duration-300"
          >
            More Details
          </a>
          <button
            onClick={() => alert("Added to favorites!")}
            className="bg-red-600 dark:bg-red-500 text-white dark:text-gray-900 px-4 py-2 rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition duration-300"
          >
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
