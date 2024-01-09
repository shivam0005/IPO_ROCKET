import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../public/styles.css'; // Import the CSS file

const CurrencyComponent = () => {
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_a9d407d629524280bec822a22a6b6ea5');
        setExchangeRates(response.data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };
    fetchExchangeRates();
  }, []);

  const currencyLabels = {
    USDCAD: 'US Dollar to Canadian Dollar',
    GBPUSD: 'British Pound to US Dollar',
    USDJPY: 'US Dollar to Japanese Yen',
  };

  return (
    <div id="currency-component" className="container">
      <h2>Currency Exchange Rates</h2>
      <ul>
        {Object.keys(currencyLabels).map((symbol, index) => (
          <li key={symbol}>
            {currencyLabels[symbol]}: {exchangeRates[index]?.rate || 'Loading...'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyComponent;
