

import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/stock/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.username,
          email: form.email,
          password: form.password,
          phone: form.phone,
          address: form.address
        }),
      });
      const data1 = await res.json();
     
      if(res.ok){
        alert("Signup successful! Please log in.");
        navigate("/login");
      }
      else{
        alert(data1.message || "Signup failed. Please try again.");
      }
      // Optionally handle response here
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-blue-100">
      <Navbar />

      <div className="max-w-md mx-auto mt-12 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Account</h2>

        <form className="space-y-5" onSubmit={handleSignup}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl font-semibold transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
 