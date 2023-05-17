import React, { useState, useEffect } from "react";
import "./DigitslWatch.css";
function DigitalWatch() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <>
      <div className="digital-watch-container">
          <time className="time">time</time>
        <div className="digital-watch-display ">
          <p> {hours < 10 ? "0" + hours : hours}:</p>
          <p>{minutes < 10 ? "0" + minutes : minutes}:</p>
          <p>{seconds < 10 ? "0" + seconds : seconds}</p>
        </div>
      </div>
    </>
  );
}

export default DigitalWatch;
