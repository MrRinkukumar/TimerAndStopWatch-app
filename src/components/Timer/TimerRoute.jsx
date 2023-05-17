import React from "react";
import { Route } from "react-router-dom";
import Timer from "./TimerComponent";

export const TimerRoute = <Route exact path="/timer" element={<Timer />} />;
