import React from "react";
import { Routes } from "react-router-dom";
import { HomeRoute } from "./pages/Home/HomeRoute";
import { AboutRoute } from "./pages/About/AboutRoute";
class AppRoutes extends React.Component {
  render() {
    return (
      <>
        <Routes>{HomeRoute}</Routes>
        <Routes>{AboutRoute}</Routes>
      </>
    );
  }
}
export default AppRoutes;
