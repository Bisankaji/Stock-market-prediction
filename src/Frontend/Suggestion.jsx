import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'

function Suggestion() {
  const [info, setInfo] = useState({ suggest: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/stock/suggest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          suggesttext: info.suggest
        })
      });

      const data = await res.json();
      console.log("Response:", data);
      if(res.ok){
        alert("Suggestion submitted successfully!");
      
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const changeHandler = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-blue-100">
      <Navbar />

      <div className="max-w-xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">💡 Suggestions Box</h2>

        <label htmlFor="suggest" className="block text-lg font-medium text-gray-700 mb-2">
          Your Suggestion
        </label>

        <textarea
          name="suggest"
          id="suggest"
          rows="5"
          onChange={changeHandler}
          placeholder="Write your suggestion here..."
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800"
        ></textarea>

        <div className="text-center">
          <button
            onClick={handleSubmit}
            type="submit"
            className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-md transition duration-200"
          >
            Submit Suggestion
          </button>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
