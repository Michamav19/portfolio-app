import React from "react";
import ReactDOM from "react-dom";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Routing />
      {/* The various pages will be displayed by the `Main` component. */}
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
