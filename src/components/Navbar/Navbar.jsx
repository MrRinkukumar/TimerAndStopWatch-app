import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { TfiTimer } from "react-icons/tfi";
import { BiAlarm } from "react-icons/bi";
import { BsStopwatch } from "react-icons/bs";

function Navbar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <ul>
      <li>
        <Link to="/">
          <TfiTimer
            className="icon"
            style={{
              color: `${location.pathname === "/" ? "#5fead1" : "#fff"}`,
            }}
          />
        </Link>
      </li>
      <li>
        <Link to="/timer">
          <BiAlarm
            className="icon"
            style={{
              color: `${location.pathname === "/timer" ? "#5fead1" : "#fff"}`,
            }}
          />
        </Link>
      </li>
      <li>
        <Link to="/stop-watch">
          <BsStopwatch
            className="icon"
            style={{
              color: `${
                location.pathname === "/stop-watch" ? "#5fead1" : "#fff"
              }`,
            }}
          />
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
