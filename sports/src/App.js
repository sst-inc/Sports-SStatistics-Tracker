import React, { useState } from 'react';
import './App.css';
import PossessionTracker from './Components/PossessionTracker';
import ShotsTrackerTotal from './Components/ShotsTracker'; 
import NoteTaking from './Components/Notetaking';
import MatchTimer from './Components/MatchTimer';

export default function App() {
  return (
    <div className="App">
      <ShotsTrackerTotal />
      <PossessionTracker />
      < NoteTaking />
      <MatchTimer />
    </div>
  );
}
