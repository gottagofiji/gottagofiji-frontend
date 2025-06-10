import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
      <div>
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;