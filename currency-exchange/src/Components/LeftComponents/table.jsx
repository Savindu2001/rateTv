import React, { useState, useEffect } from 'react';

// Example component to fetch and display currency rates
function Table() {
  const [rates, setRates] = useState([]);
  const [error, setError] = useState(null);

  const fetchRates = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/rates');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRates(data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching rates:', error);
    }
  };

  useEffect(() => {
    // Fetch rates initially
    fetchRates();

    // Set up an interval to refresh data every 3 seconds
    const intervalId = setInterval(fetchRates, 30000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Helper function to get flag emoji by currency code
  const getFlagEmoji = (currencyCode) => {
    const flags = {
      USD: '🇺🇸',
      EUR: '🇪🇺',
      GBP: '🇬🇧',
      JPY: '🇯🇵',
      INR: '🇮🇳',
      AUD: '🇦🇺',
      CHF: '🇨🇭',
      // Add more currencies and their corresponding flags
    };
    return flags[currencyCode] || '';
  };

  return (
    <div className="p-4 bg-black text-yellow-500">
      <hr className="border-yellow-500 mb-4" />
      <h2 className="text-2xl text-center mb-4">Today's Currency Exchange Rates</h2>
      <hr className="border-yellow-500 mb-4" />
      <table className="w-full text-left border border-yellow-500">
        <thead>
          <tr>
            <th className="border border-yellow-500 p-2">CURRENCY</th>
            <th className="border border-yellow-500 p-2">BUYING RATE</th>
            <th className="border border-yellow-500 p-2">SELLING RATE</th>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <tr>
              <td colSpan="3" className="border border-yellow-500 p-2 text-center text-red-500">
                Error: {error}
              </td>
            </tr>
          ) : rates.length > 0 ? (
            rates.map((rate, index) => (
              <tr key={index}>
                <td className="border border-yellow-500 p-2 flex items-center">
                  <span className="mr-2">{getFlagEmoji(rate.currency)}</span>
                   
                    {rate.currency}
                </td>
                <td className="border border-yellow-500 p-2">{rate.buying}</td>
                <td className="border border-yellow-500 p-2">{rate.selling}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border border-yellow-500 p-2 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
