import React, { useState } from "react";

export default function PostForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !location) return;

    const newPost = {
      id: Date.now(),
      user: "CommunityUser",
      description,
      location,
      photo,
      status: "pending",
      createdAt: new Date(),
    };

    onAdd(newPost);
    setDescription("");
    setLocation("");
    setPhoto(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-5 mb-8 border border-green-100"
    >
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="📝 Describe the issue..."
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-green-400 text-sm"
        rows="3"
        required
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="📍 Enter location"
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-green-400 text-sm"
        required
      />
      <input
        type="file"
        onChange={(e) => setPhoto(e.target.files[0])}
        className="mb-4 text-sm text-gray-600"
      />
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold text-sm shadow-md transition duration-200"
      >
        Post Report
      </button>
    </form>
  );
}
