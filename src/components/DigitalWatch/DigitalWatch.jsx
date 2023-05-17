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
      <div className=".digital-watch-container">
        <div className="time">Time</div>
        <div className="digital-watch-display ">
          {hours < 10 ? "0" + hours : hours}:
          {minutes < 10 ? "0" + minutes : minutes}:
          {seconds < 10 ? "0" + seconds : seconds}
        </div>
      </div>
    </>
  );
}

export default DigitalWatch;
