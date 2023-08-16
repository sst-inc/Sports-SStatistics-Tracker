import React, { useState, useEffect } from 'react';

function MatchTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTogglePause = () => {
    setIsPaused(prevIsPaused => !prevIsPaused);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsPaused(true);
  };

  return (
    <div className="App">
      <button onClick={handleTogglePause}>{isPaused ? `Start (${seconds}s)` : `Pause (${seconds}s)`}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default MatchTimer;
