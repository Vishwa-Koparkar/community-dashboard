import React from "react";
import { Link } from "react-router-dom";
import google from "../assets/google.png";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-[#E6F4EA] backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-green-600/25">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-lg text-black font-semibold mt-2">Sign Up</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Registered Email"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-green-600 text-white font-semibold shadow-md hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center gap-2 my-4">
          <div className="h-px flex-1 bg-gray-400"></div>
          <span className="text-sm text-black">or</span>
          <div className="h-px flex-1 bg-gray-400"></div>
        </div>

        {/* Google Signup Button */}
        <button className="w-full py-2 bg-white rounded-lg flex items-center justify-center gap-2 font-medium shadow hover:bg-gray-100 transition">
          <img src={google} alt="Google" className="h-5 w-5" /> Continue with
          Google
          {/* <p>Continue With Google</p> */}
        </button>

        {/* Redirect to Login */}
        <p className="text-center text-sm text-black mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
