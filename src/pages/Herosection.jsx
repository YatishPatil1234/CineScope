import React from "react";

function Herosection({ userName }) {
  return (
    <div className="relative w-full h-screen bg-gray-900 dark:bg-gray-800 flex flex-col justify-center items-center text-center p-4">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10">
        <h2 className="text-6xl font-extrabold text-white dark:text-gray-200 max-sm:text-3xl max-md:text-4xl">
          Welcome Back, {userName}
        </h2>
        <p className="text-2xl text-gray-400 dark:text-gray-300 mt-4 max-sm:text-lg max-md:text-xl">
          Explore a vast collection of movies with CineScope
        </p>
        <div className="mt-8">
          <button className="px-8 py-4 bg-red-600 dark:bg-red-500 text-white dark:text-gray-900 font-semibold rounded-full hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none transition duration-300 ease-in-out max-sm:px-4 max-sm:py-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
