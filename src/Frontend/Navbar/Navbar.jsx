import React from 'react';
import { BarChart3, LogOut, Sun, Moon, Coffee } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/user-slice';

function Navbar() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const logoutfunction = () => {
    dispatch(logoutUser());
    alert("Logged out successfully!");
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return { text: "Good Morning", icon: <Sun className="inline-block w-5 h-5 text-yellow-400 mr-1" /> };
    else if (hour < 18) return { text: "Good Afternoon", icon: <Coffee className="inline-block w-5 h-5 text-orange-400 mr-1" /> };
    else return { text: "Good Evening", icon: <Moon className="inline-block w-5 h-5 text-blue-500 mr-1" /> };
  };

  const greeting = getGreeting();

  return (
    <nav className="bg-white shadow-md border-b py-3 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and brand */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <NavLink to="/">
              <BarChart3 className="w-5 h-5 text-white" />
            </NavLink>
          </div>
          <NavLink to="/" className="text-2xl font-bold text-gray-800 hover:text-green-600 transition duration-200">
            Stocker
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-[16px]">
          <NavLink to="/market" className="text-gray-700 hover:text-green-600 transition">Market</NavLink>
          <NavLink to="/portfolio" className="text-gray-700 hover:text-green-600 transition">Portfolio</NavLink>
          <NavLink to="/predictstock" className="text-gray-700 hover:text-green-600 transition">Predict</NavLink>
          <NavLink to="/news" className="text-gray-700 hover:text-green-600 transition">News</NavLink>
          <NavLink to="/stock" className="text-gray-700 hover:text-green-600 transition">Stocks</NavLink>
          <NavLink to="/suggestion" className="text-gray-700 hover:text-green-600 transition">Suggestions</NavLink>
        </div>

        {/* Greeting & Auth Buttons */}
        <div className="flex items-center space-x-4">
          {user?.name ? (
            <div className="flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-xl shadow-sm">
              <span className="text-sm text-gray-800 font-medium">
                {greeting.icon}
                {greeting.text}, <span className="font-semibold">{user.name}</span>
              </span>
              <button
                onClick={logoutfunction}
                className="flex items-center space-x-1 text-sm text-red-500 hover:text-red-600 font-semibold px-3 py-1 rounded-md transition"
              >
                <LogOut className="w-4 h-4 cursor-pointer" />
                <span className='cursor-pointer'>Logout</span>
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg font-medium shadow-sm transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-lg font-medium shadow-sm transition"
              >
                Signup
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
