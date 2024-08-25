// src/pages/Profile.jsx
import React from "react";

const Profile = ({ user }) => {
  if (!user) return null; // Return null if there's no user to display

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-center">
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt="User Profile"
            className="w-24 h-24 rounded-full shadow-md"
          />
        )}
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold">{user.displayName}</h2>
        <p className="text-gray-400">{user.email}</p>
        {user.phoneNumber && (
          <p className="text-gray-400">{user.phoneNumber}</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
