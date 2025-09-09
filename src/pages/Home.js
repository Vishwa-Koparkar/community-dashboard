import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-green-800 mb-6">
          Welcome to ...
        </h1>
        <p className="text-gray-600 mb-8">
          Together we can keep our community clean.
        </p>
        <Link
          to="/reports"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition duration-200"
        >
          View Community Reports
        </Link>
      </div>
    </div>
  );
}
