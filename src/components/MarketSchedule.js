import React from 'react';
import { marketSchedule } from '../data';
import './MarketSchedule.css';

function MarketSchedule() {
  return (
    <div className="market-schedule">
      {marketSchedule.map((market, index) =>
        <div key={index}>
          <h3 className="market-day">{market.day}</h3>
          <h4 className="market-location">{market.location}</h4>
          <p className="market-info"><em>{market.hours}</em></p>
          <p className="market-info"><em>Booth: {market.booth}</em></p>
          <br/>
        </div>
      )}
    </div>
  );
}

export default MarketSchedule;
