import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Suggestion() {
  const [info, setInfo] = useState({ suggest: "" });
  const [suggestions, setSuggestions] = useState([]);

  const user = useSelector((state) => state.user.user);
  const userId = user?._id;

  // ✅ Fetch all suggestions on page load
  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const res = await fetch("http://localhost:8000/stock/getsuggestions");
        const data = await res.json();
        if (res.ok) {
          setSuggestions(data.suggestions);
        } else {
          console.error("Failed to fetch suggestions:", data.message);
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    fetchSuggestions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!info.suggest || !userId) {
      alert("Suggestion cannot be empty");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/stock/suggest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          suggesttext: info.suggest,
          userid: userId
        })
      });

      const data = await res.json();
      console.log("Response:", data);
      if (res.ok) {
        alert("Suggestion submitted successfully!");
        setInfo({ suggest: "" });

        // ✅ Refresh suggestion list after new submission
        setSuggestions((prev) => [data.suggestion, ...prev]);
      } else {
        alert(data.message || "Failed to submit suggestion.");
      }
    } catch (err) {
      console.log("Error:", err);
      alert("Error while submitting suggestion");
    }
  };

  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-blue-100">
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">💡 Suggestions Box</h2>

        {/* Suggestion Input Form */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="suggest" className="block text-lg font-medium text-gray-700 mb-2">
            Your Suggestion
          </label>

          <textarea
            name="suggest"
            id="suggest"
            rows="4"
            value={info.suggest}
            onChange={changeHandler}
            placeholder="Write your suggestion here..."
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <div className="text-center">
           {user?.name ? (
  <button
    type="submit"
    className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-xl transition duration-200"
  >
    Submit Suggestion
  </button>
) : (
  <p className="mt-4 text-red-500 font-medium">Please log in to submit a suggestion.<NavLink className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg font-medium shadow-sm transition ml-3" to="/login" >Login here</NavLink></p>
  

)}
          </div>
        </form>
      </div>

      {/* Suggestion List */}
      {/* Suggestion List */}
<div className="max-w-2xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-6">
  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-2">📋 User Suggestions</h3>

  {suggestions.length === 0 ? (
    <p className="text-center text-gray-500 italic">No suggestions yet. Be the first to suggest something!</p>
  ) : (
    <div className="space-y-4">
      {suggestions.map((s) => (
        <div
          key={s._id}
          className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-200"
        >
          <p className="text-gray-800 text-md leading-relaxed">💬 {s.suggesttext}</p>
          <p className="text-sm text-gray-500 mt-2 flex justify-between items-center">
            <span>
              — <span className="font-semibold text-blue-600">{s.user?.name || "Unknown"}</span>
            </span>
            <span>{new Date(s.createdAt).toLocaleString()}</span>
          </p>
        </div>
      ))}
    </div>
  )}
</div>

     
    </div>
  );
}

export default Suggestion;
