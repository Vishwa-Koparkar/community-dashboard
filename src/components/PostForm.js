// src/components/PostForm.js
import React, { useState } from "react";
import api from "../api";

export default function PostForm({ onCreated }) {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photoFiles, setPhotoFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setPhotoFiles(e.target.files?.[0] || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("description", description);
    formData.append("location_text", location);

    // append multiple images
    photoFiles.forEach((file) => formData.append("images", file));

    try {
      const res = await api.post("/posts/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onCreated(res.data);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="📝 Describe the issue..."
        className="w-full border rounded-lg p-3 text-sm"
        rows={4}
        required
      />
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        type="text"
        placeholder="📍 Location (text)"
        className="w-full border rounded-lg p-2 text-sm"
        required
      />
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => setPhotoFiles(Array.from(e.target.files))}
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
      >
        {loading ? "Posting..." : "Post Report"}
      </button>
    </form>
  );
}
