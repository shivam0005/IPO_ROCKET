import React from 'react';
import { Link } from 'react-router-dom';
import './common/Form.css';
import CurrencyComponent from './CurrencyComponent';
import IPOComponent from './IpoComponent';

const Home = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1 className="title">IPO Rocket</h1>
        <nav className="nav">
          <Link to="/login" className="nav-link">
            Login
          </Link>
          
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </nav>
      </header>
      <div className="content">
        <IPOComponent />
      </div>

      <div className="content">
        <CurrencyComponent />
      </div>
    </div>
  );
};

export default Home;
