import React, { useState } from 'react';
import './App.css';
import PossessionTracker from './Components/PossessionTracker';
import NoteTaking from './Components/Notetaking';
import MatchTimer from './Components/MatchTimer';
import { StartPage } from './StartPage';
import GameRecord from './GameRecord';

export default function App() {
  return (
    <div className="App">
      <StartPage />
      <GameRecord/>
    </div>
  );
}
