import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
      <h2>Welcome to Avery's Organics</h2>
      <p>We are a mid-sized farm in Northern Oregon that grows organic produce and sells it at farmers markets throughout town.</p>
      <Link to="/market-schedule" className="button">View Market Schedule</Link>
      <Link to="/produce-list" className="button">Produce List</Link>
    </div>
  );
}

export default Hero;
