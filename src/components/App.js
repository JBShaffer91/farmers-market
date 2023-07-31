import React from 'react';
import MarketSchedule from './MarketSchedule';
import ProduceList from './ProduceList';
import { marketSchedule, availableProduce } from '../data';


function App() {
  return (
    <div className="App">
      <h1>Avery's Organics</h1>
      <p>Welcome to Avery's Organics. We are a mid-sized farm in Northern Oregon that grows organic produce and sells it at farmers markets throughout town.</p>
      <hr/>
      <h2>Market Schedule</h2>
      <MarketSchedule marketSchedule={marketSchedule} />
      <hr/>
      <h2>Seasonal Produce</h2>
      <ProduceList availableProduce={availableProduce} />
    </div>
  );
}

export default App;
