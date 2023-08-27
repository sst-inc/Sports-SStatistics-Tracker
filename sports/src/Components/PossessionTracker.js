import React, { useState, useEffect } from "react";

export default function PossessionTracker() {
  const [possessionTeamA, setPossessionTeamA] = useState(0);
  const [possessionTeamB, setPossessionTeamB] = useState(0);
  const [activeTeam, setActiveTeam] = useState("None");
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const startTimer = (team) => {
    setActiveTeam(team);
    setIsRunning(true);
  };

  const stopTimer = () => {
    if (activeTeam === "Team A") {
      setPossessionTeamA((prevTime) => prevTime + timer);
    } else if (activeTeam === "Team B") {
      setPossessionTeamB((prevTime) => prevTime + timer);
    }

    setTimer(0);
    setActiveTeam("None");
    setIsRunning(false);
  };

  return (
    <div>
      <div>
        <button onClick={() => startTimer("Team A")}>Start</button>
      </div>
      <div>
        <button onClick={() => startTimer("Team B")}>Start</button>
      </div>
      <div>
        <button onClick={stopTimer}></button>
      </div>
    </div>
  );
}
