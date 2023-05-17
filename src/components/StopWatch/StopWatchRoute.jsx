import React from "react";
import { Route } from "react-router-dom";
import Stopwatch from "./Stopwatch";

export const StopWatchRoute = (
  <Route exact path="/stop-watch" element={<Stopwatch />} />
);
