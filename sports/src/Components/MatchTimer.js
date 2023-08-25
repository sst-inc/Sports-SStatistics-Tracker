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
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        style={{
          backgroundColor: '#b4b4b4',
          border: '1px solid #000000',
          borderRadius: '15px',
          height: '30px',
          width: '90px',
          color: '#000000',
          cursor: 'pointer',
          marginRight: '50px',
        }}
        onClick={handleTogglePause}
      >
        {isPaused ? `Start (${seconds}s)` : `Pause (${seconds}s)`}
      </button>
      <button
        style={{
          backgroundColor: '#ff0000',
          border: '1px solid #000000',
          borderRadius: '19px',
          height: '45px',
          width: '58px',
          color: '#000000',
          cursor: 'pointer',
          marginLeft: '50px',
        }}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default MatchTimer;
