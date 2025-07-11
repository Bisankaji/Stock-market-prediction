import React, { useEffect, useState } from 'react';

const Stock = () => {
  const [stockData, setStockData] = useState([]);
  const apiKey = 'YOUR_API_KEY'; // Replace this with your real API key

  const symbols = [
    'AAPL', 'GOOG', 'TSLA', 'AMZN', 'MSFT',
    'META', 'NVDA', 'NFLX', 'INTC', 'AMD',
    'BA', 'BABA', 'T', 'V', 'MA',
    'JPM', 'WMT', 'DIS', 'NKE', 'PYPL'
  ];

  const fetchData = async () => {
    const results = [];

    for (const symbol of symbols) {
      try {
        const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`);
        const data = await res.json();
        results.push({ symbol, ...data });
      } catch (err) {
        results.push({ symbol, error: true });
      }
    }

    setStockData(results);
  };

  useEffect(() => {
    fetchData(); // Fetch once on mount

    // Set up interval for live updating every 15 seconds
    const intervalId = setInterval(fetchData, 15000);

    return () => clearInterval(intervalId); // Clear on unmount
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>📈 Real-Time Stock Prices (Updates Every 15s)</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead style={{ backgroundColor: '#eee' }}>
          <tr>
            <th>Symbol</th>
            <th>Current</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Prev. Close</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock, index) => (
            <tr key={index}>
              <td>{stock.symbol}</td>
              {stock.error ? (
                <td colSpan="5">❌ Error</td>
              ) : (
                <>
                  <td>${stock.c}</td>
                  <td>${stock.o}</td>
                  <td>${stock.h}</td>
                  <td>${stock.l}</td>
                  <td>${stock.pc}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stock;
