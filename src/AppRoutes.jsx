import React from "react";
import { Routes } from "react-router-dom";
import { HomeRoute } from "./pages/Home/HomeRoute";
import { TimerRoute } from "./components/Timer/TimerRoute";
import { StopWatchRoute } from "./components/StopWatch/StopWatchRoute";
class AppRoutes extends React.Component {
  render() {
    return (
      <>
        <Routes>{HomeRoute}</Routes>
        <Routes>{TimerRoute}</Routes>
        <Routes>{StopWatchRoute}</Routes>
      </>
    );
  }
}
export default AppRoutes;
