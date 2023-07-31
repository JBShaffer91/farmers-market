import React from 'react';
import { marketSchedule } from '../data';

function MarketSchedule() {
  return (
    <React.Fragment>
      <hr/>
      {marketSchedule.map((market, index) =>
        <div key={index}>
          <h3>{market.day}</h3>
          <h4>{market.location}</h4>
          <p><em>{market.hours}</em></p>
          <p><em>Booth: {market.booth}</em></p>
          <br/>
        </div>
      )}
    </React.Fragment>
  );
}

export default MarketSchedule;
