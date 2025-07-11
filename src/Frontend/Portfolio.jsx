
import React, { useState } from 'react';
import Navbar from './Navbar/Navbar'

export default function Portfolio() {
  const [symbol, setSymbol] = useState('');
  const [prediction, setPrediction] = useState(null);

  const getPrediction = async () => {
    const res = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ symbol })
    });

    const data = await res.json();
    setPrediction(data.predicted_price);
  };

  return (
    <div className="p-4 max-w-lg mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Stock Price Predictor</h1>
      <input
        type="text"
        placeholder="Enter Symbol (e.g. AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <button
        onClick={getPrediction}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Predict
      </button>
      {prediction && (
        <div className="mt-4 text-lg">
          Predicted Price for {symbol.toUpperCase()}: <strong>${prediction}</strong>
        </div>
      )}
    </div>
  );
}


