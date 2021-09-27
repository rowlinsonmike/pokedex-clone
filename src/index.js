import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
