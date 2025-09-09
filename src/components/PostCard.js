import React from "react";

export default function PostCard({ post }) {
  const badgeClasses =
    post.status === "resolved"
      ? "bg-green-100 text-green-700"
      : post.status === "verified"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-gray-100 text-gray-700";

  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-green-800">
          {post.user || "Anonymous"}
        </span>
        <span
          className={`text-xs px-3 py-1 rounded-full font-medium ${badgeClasses}`}
        >
          {post.status}
        </span>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">
        {post.description}
      </p>
      <p className="text-sm text-gray-500 mt-1">📍 {post.location}</p>
      {post.photo && (
        <img
          src={URL.createObjectURL(post.photo)}
          alt="report"
          className="mt-3 rounded-xl max-h-72 w-full object-cover border"
        />
      )}
      <p className="text-xs text-gray-400 mt-2">
        {new Date(post.createdAt).toLocaleString()}
      </p>
    </div>
  );
}
