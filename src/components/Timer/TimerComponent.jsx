import React, { useState, useEffect, useRef } from "react";
import "./timer.css";
function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formattedTime = new Date(time).toISOString().substr(14, 5);

  return (
    <div className="timer-container">
      <div className="timer-display">{formattedTime}</div>
      <div className="timer-btn-container">
        {!isRunning ? (
          <button className="timer-btn-start" onClick={handleStart}>
            Start
          </button>
        ) : (
          <button className="timer-btn-pause" onClick={handlePause}>
            Pause
          </button>
        )}
        <button className="timer-btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
