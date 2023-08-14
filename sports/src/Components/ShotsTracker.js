import React, { useState } from "react";

const ShotsTracker = () => {
  const [teamAShotsOnTarget, setTeamAShotsOnTarget] = useState(0);
  const [teamAShotsOffTarget, setTeamAShotsOffTarget] = useState(0);
  const [teamBShotsOnTarget, setTeamBShotsOnTarget] = useState(0);
  const [teamBShotsOffTarget, setTeamBShotsOffTarget] = useState(0);

  const increment = (setter) => {
    setter((prevCount) => prevCount + 1);
  };

  const decrement = (setter) => {
    setter((prevCount) => Math.max(prevCount - 1, 0));
  };

  return (
    <div>
      <h2>Shots Tracker</h2>
      <div>
        <h3>Team A</h3>
        <p>On Target: {teamAShotsOnTarget}</p>
        <button onClick={() => increment(setTeamAShotsOnTarget)}>+</button>
        <button onClick={() => decrement(setTeamAShotsOnTarget)}>-</button>
        <p>Off Target: {teamAShotsOffTarget}</p>
        <button onClick={() => increment(setTeamAShotsOffTarget)}>+</button>
        <button onClick={() => decrement(setTeamAShotsOffTarget)}>-</button>
      </div>
      <div>
        <h3>Team B</h3>
        <p>On Target: {teamBShotsOnTarget}</p>
        <button onClick={() => increment(setTeamBShotsOnTarget)}>+</button>
        <button onClick={() => decrement(setTeamBShotsOnTarget)}>-</button>
        <p>Off Target: {teamBShotsOffTarget}</p>
        <button onClick={() => increment(setTeamBShotsOffTarget)}>+</button>
        <button onClick={() => decrement(setTeamBShotsOffTarget)}>-</button>
      </div>
    </div>
  );
};

export default ShotsTracker;
