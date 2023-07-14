// import logo from './logo.svg';
// rfce auto function creator
import React from "react";
// import { withRouter } from "react-router";

import "./App.scss";
import Aboutme from "./components/Aboutme";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="main-container">
      {/* Aboutme Component */}
      <Aboutme />

      <div className="vertical-divider-first"></div>
      <div className="horizontial-divider"></div>
      <div className="vertical-divider-second"></div>

      {/* Resume Component: contains all resume tabs */}
      <Resume />
    </div>
  );
}

export default App;
