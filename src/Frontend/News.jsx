import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';

export default function News() {
  const [data1, setData1] = useState([]);
  const [loading, setLoading] = useState(true); // loading state
  const API_KEY='e7c0ceee21f74cdfb136ac781d6a0c7a';
  const fetchApi = async () => {
    try {
      const res = await fetch(
        "https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo"
      );
      if (res.ok) {
        const data = await res.json();
        setData1(data.feed || []);
        setLoading(false); // finished loading
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="bg-white rounded-2xl shadow-md p-5 animate-pulse space-y-4">
      <div className="h-5 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-3 bg-gray-200 rounded w-full"></div>
      <div className="h-3 bg-gray-200 rounded w-full"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Latest AAPL News</h1>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Show 6 skeletons while loading */}
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : data1.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data1.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-300">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Published:</strong> {item.time_published}
                </p>
                <p className="text-gray-700 text-sm mb-3">{item.summary}</p>
                <p className="text-sm text-gray-500 mb-1">
                  <strong>Source:</strong> {item.source}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Authors:</strong> {item.authors?.join(', ') || 'N/A'}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read Full Article →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No news found.</p>
        )}
      </div>
    </div>
  );
}
