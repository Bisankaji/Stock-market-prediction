import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Bell, ArrowUpRight, ArrowDownLeft, BarChart3, PieChart, Zap, Target, Activity } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar/Navbar';


const InvestmentPlatform = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [portfolioValue, setPortfolioValue] = useState(45672.34);

  // Mock data for trending stocks
  const trendingStocks = [
    { symbol: 'AAPL', price: 185.4, change: 2.34, changePercent: 1.28, isUp: true },
    { symbol: 'GOOGL', price: 2456.78, change: -12.45, changePercent: -0.51, isUp: false },
    { symbol: 'MSFT', price: 342.19, change: 5.67, changePercent: 1.68, isUp: true },
    { symbol: 'TSLA', price: 234.56, change: -8.90, changePercent: -3.65, isUp: false },
  ];

  // Mock portfolio data
  const portfolioData = [
    { name: 'Technology', value: 15000, percentage: 33, color: 'bg-green-500' },
    { name: 'Healthcare', value: 12000, percentage: 26, color: 'bg-blue-500' },
    { name: 'Finance', value: 10000, percentage: 22, color: 'bg-purple-500' },
    { name: 'Energy', value: 8672, percentage: 19, color: 'bg-orange-500' },
  ];

  // useEffect(() => {
  //   // Simulate real-time updates
  //   const interval = setInterval(() => {
  //     setPortfolioValue(prev => prev + (Math.random() - 0.5) * 100);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      
<Navbar/>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                Make Better
                <br />
                <span className="text-green-500">Investment</span>
                <br />
                Decisions With
                <br />
                Alternative Data
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Gain the edge you need with real-time market insights, advanced analytics, 
                and alternative data sources that institutional investors rely on.
              </p>
              <div className="flex space-x-4">
                <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                  Get Started
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500">Portfolio Value</span>
                  <div className="flex items-center space-x-2 text-green-500">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+2.45%</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-6">
                  ${portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="h-40 bg-gradient-to-r from-green-400 to-green-600 rounded-lg relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120">
                    <path
                      d="M0,80 Q75,40 150,60 T300,20"
                      stroke="white"
                      strokeWidth="3"
                      fill="none"
                      opacity="0.8"
                    />
                    <circle cx="250" cy="30" r="4" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <span className="text-sm">S&P 500</span>
                <span className="text-green-400">4,567.89</span>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">NASDAQ</span>
                <span className="text-red-400">14,234.56</span>
                <TrendingDown className="w-4 h-4 text-red-400" />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">DOW</span>
                <span className="text-green-400">34,567.12</span>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
            </div>
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Trending Stocks */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">What Stocks are Trending?</h3>
                <button className="text-green-500 hover:text-green-600 font-medium">View All</button>
              </div>
              <p className="text-gray-600 mb-8">
                Discover the most talked-about stocks based on social sentiment, 
                news mentions, and trading volume.
              </p>
              <div className="space-y-4">
                {trendingStocks.map((stock, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {stock.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{stock.symbol}</div>
                        <div className="text-sm text-gray-500">${stock.price}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`flex items-center space-x-1 ${stock.isUp ? 'text-green-500' : 'text-red-500'}`}>
                        {stock.isUp ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownLeft className="w-4 h-4" />}
                        <span className="font-medium">{stock.changePercent}%</span>
                      </div>
                      <div className="text-sm text-gray-500">{stock.isUp ? '+' : ''}{stock.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stock Picks */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Stock Picks Powered by Alternative Data</h3>
              <p className="text-gray-600 mb-8">
                Our AI analyzes satellite data, social sentiment, and economic indicators 
                to identify high-potential investment opportunities.
              </p>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl"></div>
                <div className="relative p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                      <Target className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">87% Accuracy</div>
                    <div className="text-gray-600">Average prediction accuracy over the last 6 months</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alerts & Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Free Stock Alerts */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Free Stock Alerts for Your Portfolio</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                Get real-time notifications about significant price movements, 
                earnings announcements, and market events affecting your investments.
              </p>
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm opacity-90">Active Alerts</span>
                  <Bell className="w-5 h-5" />
                </div>
                <div className="text-3xl font-bold mb-2">24</div>
                <div className="text-sm opacity-90">Monitoring your portfolio</div>
              </div>
            </div>

            {/* Portfolio Tracking */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Track your portfolio</h3>
                <ArrowUpRight className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-600 mb-8">
                Monitor your investments with advanced analytics and 
                performance tracking across all your accounts.
              </p>
              <div className="space-y-4">
                {portfolioData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                      <span className="font-medium text-gray-900">{item.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">${item.value.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Total Value</span>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">
                      ${portfolioData.reduce((sum, item) => sum + item.value, 0).toLocaleString()}
                    </div>
                    <div className="flex items-center text-green-500 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      +5.2% today
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Stocker</span>
              </div>
              <p className="text-gray-400">
                Making investment decisions smarter with alternative data and AI-powered insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Market Data</a></li>
                <li><a href="#" className="hover:text-white">Portfolio Tracking</a></li>
                <li><a href="#" className="hover:text-white">Stock Alerts</a></li>
                <li><a href="#" className="hover:text-white">Research Tools</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Stocker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InvestmentPlatform;