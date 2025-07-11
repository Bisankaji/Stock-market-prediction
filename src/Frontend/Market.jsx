import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';

export default function Market() {
  const [data1, setData1] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const res = await fetch(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
      );
      if (res.ok) {
        const data = await res.json();
        setData1(data);
      } else {
        console.log("response not found");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const meta = data1["Meta Data"];
  const timeSeries = data1["Time Series (5min)"];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        {meta && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Market Overview</h2>
            <p><strong>Information:</strong> {meta["1. Information"]}</p>
            <p><strong>Symbol:</strong> {meta["2. Symbol"]}</p>
            <p><strong>Last Refreshed:</strong> {meta["3. Last Refreshed"]}</p>
            <p><strong>Interval:</strong> {meta["4. Interval"]}</p>
            <p><strong>Output Size:</strong> {meta["5. Output Size"]}</p>
            <p><strong>Time Zone:</strong> {meta["6. Time Zone"]}</p>
          </div>
        )}

        {loading ? (
          <p className="text-center text-gray-500">Loading market data...</p>
        ) : timeSeries ? (
          <div className="overflow-x-auto bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">IBM 5-Minute Interval Data</h3>
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="text-xs uppercase bg-gray-100 text-gray-600">
                <tr>
                  <th className="py-2 px-4">Time</th>
                  <th className="py-2 px-4">Open</th>
                  <th className="py-2 px-4">High</th>
                  <th className="py-2 px-4">Low</th>
                  <th className="py-2 px-4">Close</th>
                  <th className="py-2 px-4">Volume</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(timeSeries).map(([timestamp, values], index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{timestamp}</td>
                    <td className="py-2 px-4">{values["1. open"]}</td>
                    <td className="py-2 px-4">{values["2. high"]}</td>
                    <td className="py-2 px-4">{values["3. low"]}</td>
                    <td className="py-2 px-4">{values["4. close"]}</td>
                    <td className="py-2 px-4">{values["5. volume"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500">No data found.</p>
        )}
      </div>
    </div>
  );
}
