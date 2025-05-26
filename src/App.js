import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js"

const App = () => {
  return(
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
