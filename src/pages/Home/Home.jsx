import React, { useState } from "react";
import { DigitalWatch, StopWatch, Timer } from "../../components";
import "./Home.css";
import { BiTimer, BiStopwatch, BiTime } from "react-icons/bi";
const Home = () => {
  const [cstate, setCstate] = useState("timer");
  return (
    <div>
      <DigitalWatch />
      <div className="container">
        <div className="container-btn">
          <button
            onClick={() => {
              setCstate("timer");
            }}
            style={{
              borderBottom: `${cstate === "timer" ? "2px solid blue" : "none"}`,
            }}
          >
            <BiTimer /> Timer
          </button>
          <button
            style={{
              borderBottom: `${cstate != "timer" ? "2px solid blue" : "none"}`,
            }}
            onClick={() => setCstate("stopWatch")}
          >
            <BiStopwatch /> StopWatch
          </button>
        </div>
        <div>{cstate === "timer" ? <Timer /> : <StopWatch />}</div>
      </div>
    </div>
  );
};

export default Home;
