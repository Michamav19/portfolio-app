import React from "react";
import ReactDOM from "react-dom";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";

// New installation for sidebar (19/04) "npm install react-sidebar"
// Ayto edw prwta: (19/04) "npm install react-icons --save"

// ReactDOM.render(
//   <React.StrictMode>
//     <Routes />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Routing />
      {/* The various pages will be displayed by the `Main` component. */}
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
