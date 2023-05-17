import React, { useState, useEffect, useRef } from "react";
import "./StopWatch.css";
import { VscDebugStart } from "react-icons/vsc";
import { BsFillStopFill } from "react-icons/bs";
import { SlRefresh } from "react-icons/sl";
import { RxResume } from "react-icons/rx";

function Stopwatch() {
  const [time, setTime] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
  };

  const handleResume = () => {
    intervalRef.current = setInterval(() => {
      setTime((time) => time + 10);
    }, 10);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);

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
      <div class="ring">
        <time>Stopwatch</time>
        {formatTime()}
        <span></span>
      </div>
      <div className="stopwatch-controls">
        <button className="stopwatch-btn" onClick={handleStart}>
          <VscDebugStart />
        </button>

        <button className="stopwatch-btn" onClick={handlePause}>
          <BsFillStopFill />
        </button>

        <button className="stopwatch-btn" onClick={handleResume}>
          <RxResume />
        </button>

        <button className="stopwatch-btn" onClick={handleReset}>
          <SlRefresh />
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
