import React from 'react'
import { TrendingUp, TrendingDown, Bell, ArrowUpRight, ArrowDownLeft, BarChart3, PieChart, Zap, Target, Activity } from 'lucide-react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div>
            {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
               <NavLink to="/">  <BarChart3 className="w-5 h-5 text-white" /></NavLink>
              </div>
           <NavLink to="/">   <span className="text-xl font-bold text-gray-900 cursor-pointer">Stocker</span></NavLink>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/market" className="text-gray-700 hover:text-gray-900">Market</NavLink>
              <NavLink to="/portfolio" className="text-gray-700 hover:text-gray-900">Portfolio</NavLink>
              <NavLink to="/predictstock" className="text-gray-700 hover:text-gray-900">Predict Stock</NavLink>
              {/* <a href="#" className="text-gray-700 hover:text-gray-900">Research</a> */}
              <NavLink to="/news" className="text-gray-700 hover:text-gray-900">News</NavLink>
              <NavLink to="/stock" className="text-gray-700 hover:text-gray-900">stock</NavLink>
              <NavLink to="/suggestion" className="text-gray-700 hover:text-gray-900">Suggestions</NavLink>
              
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-gray-600" />
              <div className="w-8 h-8 "> <NavLink to="/login" className="text-gray-700 hover:text-gray-900">Login</NavLink></div>
              <div className="w-8 h-8 "> <NavLink to="/signup" className="text-gray-700 hover:text-gray-900">Signup</NavLink></div>
            </div>
          </div>
        </div>
       
      </nav>
    </div>
  )
}

export default Navbar
