import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../public/styles.css'; // Import the CSS file

const IPOComponent = () => {
  const [ipoData, setIpoData] = useState([]);

  useEffect(() => {
    const fetchIPOs = async () => {
      try {
        const response = await axios.get('https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_a9d407d629524280bec822a22a6b6ea5');
        setIpoData(response.data);
      } catch (error) {
        console.error('Error fetching IPO data:', error);
      }
    };
    fetchIPOs();
  }, []);

  return (
    <div id="ipo-component" className="container">
      <h2>Upcoming IPOs</h2>
      {ipoData.map((ipo) => (
        <div key={ipo.symbol} className="ipo-item">
          <strong>Symbol:</strong> {ipo.symbol} <br />
          <strong>Company Name:</strong> {ipo.companyName} <br />
          <strong>Status:</strong> {ipo.status} <br />
          <strong>Volume:</strong> {ipo.volume} <br />
          <strong>Price Range:</strong> {ipo.priceRangeLow} - {ipo.priceRangeHigh} $<br />
          {/* Add more data fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default IPOComponent;
