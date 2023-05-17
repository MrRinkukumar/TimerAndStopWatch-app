import React, { useState, useEffect, useRef } from "react";
import "./timer.css";
import { VscDebugStart } from "react-icons/vsc";
import { BsFillStopFill } from "react-icons/bs";
import { SlRefresh } from "react-icons/sl";
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
    <>
      <div className="timer-container">
        <div class="ring">
          <time>Timer</time>
          {formattedTime}
          <span></span>
        </div>
      </div>
      <div className="timer-btn-container">
        <button className="timer-btn" onClick={handleStart}>
          <VscDebugStart />
        </button>

        <button className="timer-btn" onClick={handlePause}>
          <BsFillStopFill />
        </button>

        <button className="timer-btn" onClick={handleReset}>
          <SlRefresh />
        </button>
      </div>
    </>
  );
}

export default Timer;
