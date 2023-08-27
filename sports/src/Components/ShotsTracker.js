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
      <div>
        <button onClick={() => increment(setTeamAShotsOnTarget)}>+</button>
        <button onClick={() => increment(setTeamAShotsOffTarget)}>+</button>
      </div>
      <div>
        <button onClick={() => increment(setTeamBShotsOnTarget)}>+1 Shot on Target</button>
        <button onClick={() => increment(setTeamBShotsOffTarget)}>+1 Shot off Target</button>
      </div>
    </div>
  );
};

