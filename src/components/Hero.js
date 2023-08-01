import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <Link to="/market-schedule" className="button">View Market Schedule</Link>
      <Link to="/produce-list" className="button">Produce List</Link>
    </div>
  );
}

export default Hero;
