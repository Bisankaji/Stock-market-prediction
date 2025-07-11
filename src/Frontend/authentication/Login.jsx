import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
  
  const navigate = useNavigate();


  const [info, setInfo] = useState({
    email: '',
    password: ''
  })

  const handlechange = (e) => {
    console.log(e);
  setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const loginApi = async (e) => {
    try{
      const res = await fetch("http://localhost:8000/stock/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: info.email,
          password: info.password
        }),
      }
      );
      const data = await res.json();
      console.log(data);
      if(res.ok) {
        console.log("Login successful:");
        alert("Login successful!");
        navigate("/");
      }
      else{
        alert(data.message || "Login failed. Please try again.");
      }

    }catch(e){
      console.error("Error during login:", e);
    }
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex items-center justify-center py-10">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to Your Account</h2>
          
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name='email'
              value={info.email}
              onChange={handlechange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={info.password}
                 onChange={handlechange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button onClick={loginApi} className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition duration-200">
            Login
          </button>

          <p className="mt-4 text-center text-gray-500 text-sm">
            Don't have an account? <NavLink to="/signup" className="text-blue-500 hover:underline">Sign Up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
