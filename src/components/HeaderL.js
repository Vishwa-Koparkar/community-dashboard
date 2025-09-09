import React from "react";
import { Link } from "react-router-dom";

const HeaderL = () => {
  return (
    <div className="flex items-center justify-around  p-5 font-semibold">
      <h1 className="text-2xl">Recyclo</h1>

      <ul className="flex items-center justify-center gap-11 text-lg">
        <Link
          to="/login"
          className="text-black bg-white rounded-2xl px-5 py-2 text-md"
        >
          Login
        </Link>
        <Link to="/signup" className="text-black rounded-2xl px-5 py-2 text-md">
          Sign Up
        </Link>
      </ul>
    </div>
  );
};

export default HeaderL;
