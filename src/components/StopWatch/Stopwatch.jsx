import React, { useState, useEffect, useRef } from "react";
import "./StopWatch.css";
function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    intervalRef.current = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    intervalRef.current = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
  };

  const formatTime = () => {
    const centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    const hours = ("0" + Math.floor(time / 3600000)).slice(-2);
    return `${hours}:${minutes}:${seconds}.${centiseconds}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-display">{formatTime()}</div>
      <div className="stopwatch-controls">
        {!isActive && !isPaused && (
          <button className="stopwatch-btn-start" onClick={handleStart}>
            Start
          </button>
        )}
        {isPaused && (
          <button className="stopwatch-btn-pause" onClick={handlePause}>
            Pause
          </button>
        )}
        {!isPaused && isActive && (
          <button className="stopwatch-btn-resume" onClick={handleResume}>
            Resume
          </button>
        )}
        {(isActive || isPaused) && (
          <button className="stopwatch-btn-reset" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default Stopwatch;
