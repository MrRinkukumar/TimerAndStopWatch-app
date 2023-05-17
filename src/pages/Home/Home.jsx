import React from "react";
import { DigitalWatch } from "../../components";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <div class="ring">
        <DigitalWatch />
        <span></span>
      </div>
    </div>
  );
};

export default Home;
