import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./StartPage.css";

export const StartPage = () => {
  const [gameTime, setGameTime] = useState(20); // Default game time
  const [breakTime, setBreakTime] = useState(6); // Default break time

  const handleGameTimeChange = (event) => {
    setGameTime(parseInt(event.target.value));
  };

  const handleBreakTimeChange = (event) => {
    setBreakTime(parseInt(event.target.value));
  };

  const [team1Name, setTeam1Name] = useState(""); // State for Team 1 name
  const [team2Name, setTeam2Name] = useState(""); // State for Team 2 name

  return (
    <div className="android-small">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="text-wrapper">Creating Game</div>
          <div className="team-name">
            Team 1 Name
            <br />
            <input
              type="text"
              id="Team1Name"
              value={team1Name}
              onChange={(e) => setTeam1Name(e.target.value)}
              placeholder=""
            />
          </div>
          <div className="game-time">
            Game Time
            <br />
            <input
              type="range"
              min="0"
              max="60"
              step="1"
              className="slider"
              value={gameTime}
              onChange={handleGameTimeChange}
            />
            <br />
            <span className="slider-value">{gameTime}:00</span>
          </div>
          <div className="team-name-2">
            Team 2 Name
            <br />
            <input
              type="text"
              id="Team2Name"
              value={team2Name}
              onChange={(e) => setTeam2Name(e.target.value)}
              placeholder=""
            />
          </div>
          <div className="rectangle-4" />
        </div>
        <div className="overlap">
          <div className="break-time">
            Break Time
            <br />
            <input
              type="range"
              min="0"
              max="15"
              step="1"
              className="slider"
              value={breakTime}
              onChange={handleBreakTimeChange}
            />
            <br />
            <span className="slider-value">{breakTime}:00</span>
          </div>
          <div className="rectangle-5" />
        </div>
        <div className="button-container">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button className="yellow-button">Start</button>
        </div>
      </div>
    </div>
  );
};
