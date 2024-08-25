import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import Herosection from "./pages/Herosection";
import Login from "./pages/Login";
import MovieCard from "./pages/MovieCard";
import Navbar from "./pages/Navbar";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const fullApiURl = `${API_URL}?apikey=${API_KEY}`;
console.log(fullApiURl);

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  ); // Load from localStorage if available

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const name = currentUser.displayName || "User";
        setUserName(name);
        localStorage.setItem("userName", name); // Persist in localStorage
        searchMovies("Batman");
      } else {
        setMovies([]);
        setUserName("");
        localStorage.removeItem("userName"); // Clear from localStorage
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchMovieDetails = async (imdbID) => {
    const response = await fetch(`${fullApiURl}&i=${imdbID}`);
    const data = await response.json();
    return data;
  };

  const searchMovies = async (title) => {
    setLoading(true);
    const response = await fetch(`${fullApiURl}&s=${title}`);
    const data = await response.json();
    if (data.Search) {
      const detailedMovies = await Promise.all(
        data.Search.map(async (movie) => {
          const details = await fetchMovieDetails(movie.imdbID);
          return details;
        })
      );
      setMovies(detailedMovies);
      console.log(detailedMovies);
    } else {
      setMovies([]);
    }
    setLoading(false);
  };

  return (
    <div
      className={`${
        isDarkMode ? "dark" : ""
      } bg-gray-900 text-white min-h-screen`}
    >
      {user ? (
        <>
          <Navbar
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            user={user}
          />
          <Herosection userName={userName} />

          <div>
            <h1 className="text-center text-3xl text-blue-500 font-mono font-extrabold mt-4">
              SEARCH MOVIES HERE
            </h1>

            <div className="search p-4 flex justify-center">
              <div className="relative w-full max-w-lg">
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for movies"
                  className="w-full px-4 py-3 bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                />
                <button
                  onClick={() => searchMovies(searchTerm)}
                  className="absolute inset-y-0 right-0 px-4 py-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="p-4 text-center">
              <div className="loader text-3xl">Loading...</div>
            </div>
          ) : movies.length > 0 ? (
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty p-4 text-center">
              <h2>No movies found</h2>
            </div>
          )}
        </>
      ) : (
        <Login setUser={setUserName} />
      )}
    </div>
  );
};

export default App;
