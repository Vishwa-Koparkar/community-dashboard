// src/components/PostForm.js
import React, { useState } from "react";
import api from "../api";

export default function PostForm({ onCreated }) {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setPhotoFile(e.target.files?.[0] || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim() || !location.trim()) {
      return alert("Please enter description and location.");
    }

    const formData = new FormData();
    formData.append("description", description);
    formData.append("location_text", location);
    if (photoFile) formData.append("photo", photoFile);

    try {
      setLoading(true);
      // IMPORTANT: do NOT set "Content-Type" header manually; browser sets multipart boundary for you
      const res = await api.post("/posts/", formData);
      const created = res.data;
      // notify parent
      if (typeof onCreated === "function") onCreated(created);
      // clear form
      setDescription("");
      setLocation("");
      setPhotoFile(null);
    } catch (err) {
      console.error("Upload error:", err);
      // show useful message if available
      const serverMsg = err.response?.data || err.message;
      alert("Upload failed: " + JSON.stringify(serverMsg));
    } finally {
      setLoading(false);
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
      <input type="file" accept="image/*" onChange={handleFileChange} />
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
