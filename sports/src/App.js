import React, { useState } from 'react';
import './App.css';
import PossessionTracker from './Components/PossessionTracker';
import ShotsTrackerTotal from './Components/ShotsTracker'; 
import NoteTaking from './Components/Notetaking';

export default function App() {
  return (
    <div className="App">
      <ShotsTrackerTotal />
      <PossessionTracker />
      < NoteTaking />
    </div>
  );
}
