import React, { useState } from "react";
import Logout from "./Logout";

function Navbar({ isDarkMode, setIsDarkMode, user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 w-full fixed top-0 left-0 z-50 shadow-sm shadow-slate-100 dark:shadow-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white text-3xl font-bold">CineScope</h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#home"
              className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#explore"
              className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Explore
            </a>
            <a
              href="#about"
              className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 dark:text-gray-400 hover:text-white focus:outline-none focus:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex space-x-4 items-center">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-gray-300 dark:text-gray-400 ml-4 px-2 py-1 rounded-md hover:text-white dark:hover:text-white transition duration-300"
            >
              {isDarkMode ? "🌞" : "🌙"}
            </button>
            <Logout />
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="text-gray-300 bg-blue-900 dark:text-gray-400 ml-4 px-3 py-2 rounded-md hover:text-white dark:hover:text-white transition duration-300"
              >
                Profile
              </button>
              {isOpen && (
                <div className="absolute right-0 m-4 border-2 border-slate-300 w-48 bg-gray-800 text-white rounded-md shadow-lg py-2 z-50">
                  <div className="px-4 py-2">
                    <p className="font-semibold">{user.displayName}</p>
                    <p className="text-sm text-gray-400">{user.email}</p>
                    {user.photoURL && (
                      <img
                        src={user.photoURL}
                        alt="User Profile"
                        className="mt-2 w-10 h-10 rounded-full"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
