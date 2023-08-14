import React, { useState } from 'react';
import './App.css';
import React from 'react';
import PossessionTracker from './Components/PossessionTracker';
import ShotsTrackerTotal from './Components/ShotsTracker'; 

export default function App() {
  return (
    <div className="App">
      <ShotsTrackerTotal />
      <PossessionTracker />
    </div>
  );
}
