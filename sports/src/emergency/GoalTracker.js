import React, { useState } from "react";

const GoalTracker = () => {
  const [teamAGoalsOnTarget, setTeamAGoalsOnTarget] = useState(0);
  const [teamBGoalsOnTarget, setTeamBGoalsOnTarget] = useState(0);

  const increment = (setter) => {
    setter((prevCount) => prevCount + 1);
  };

  const teamAStyle = {
    backgroundColor: "#96c0ff",
    border: "1px solid #000000",
    borderColor: "#000000",
    borderRadius: "16px",
    height: "43px",
    width: "115px",
    position: "absolute",
    top: "304px",
    left: "13px",
    color: "#000000",
    cursor: "pointer",
  };

  const teamBStyle = {
    backgroundColor: "#c05aff",
    border: "1px solid #000000",
    borderColor: "#000000",
    borderRadius: "16px",
    height: "43px",
    width: "115px",
    position: "absolute",
    top: "306px",
    left: "154px",
    color: "#000000",
    cursor: "pointer",
  };

  return (
    <div>
      <div>
        <button
          style={teamAStyle}
          onClick={() => increment(setTeamAGoalsOnTarget)}
        >
          +1 Goal
        </button>
      </div>
      <div>
        <button
          style={teamBStyle}
          onClick={() => increment(setTeamBGoalsOnTarget)}
        >
          +1 Goal
        </button>
      </div>
    </div>
  );
};

export default GoalTracker;
