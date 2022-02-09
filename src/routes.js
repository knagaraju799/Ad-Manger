import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import { AdDetails } from "./component";

export default function CustomRoutes() {
  return (
    <Router>
      <Routes>
        <Route default path="/ads" exact element={<Dashboard />} />
        <Route path="ads/:adId" exact element={<AdDetails />} />
      </Routes>
    </Router>
  );
}
