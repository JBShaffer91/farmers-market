import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import MarketSchedule from './MarketSchedule';
import ProduceList from './ProduceList';
import { marketSchedule, availableProduce } from '../data';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <hr/>
        <Routes>
          <Route path="/market-schedule" element={<MarketSchedule marketSchedule={marketSchedule} />} />
          <Route path="/produce-list" element={<ProduceList availableProduce={availableProduce} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
