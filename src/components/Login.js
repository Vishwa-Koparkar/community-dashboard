import React from "react";
import google from "../assets/google.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-[#E6F4EA] backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-green-600/25">
        {/* Header */}
        <div className="text-center mb-6">
          {/* <h1 className="text-3xl font-bold text-white">FixMyZone</h1> */}
          <p className="text-2xl text-black font-semibold mt-2">Login</p>
          {/* <p className="text-sm text-gray-300">Welcome Back, please log in.</p> */}
        </div>

        {/* Form */}
        <form className="space-y-4">
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

          {/* Remember + Forgot Password */}
          <div className="flex items-center justify-between text-sm text-black">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>
            <button type="button" className="hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-green-600 text-white font-semibold shadow-md hover:bg-green-700"
          >
            Login
          </button>
        </form>

        {/* OR divider */}
        <div className="flex items-center gap-2 my-4">
          <div className="h-px flex-1 bg-gray-400"></div>
          <span className="text-sm text-black">or</span>
          <div className="h-px flex-1 bg-gray-400"></div>
        </div>

        {/* Google button */}
        <button className="w-full py-2 bg-white rounded-lg flex items-center justify-center gap-2 font-medium shadow hover:bg-gray-100 transition">
          <img src={google} alt="google" className="h-5 w-5" /> Continue with
          Google
          {/* <p>Continue With Google</p> */}
        </button>

        {/* Sign up */}
        <p className="text-center text-sm text-black mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
