import React, { useState } from "react";
import CurrentLocation from "./component/currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
       
      </div>
      <div className="footer-info">
        <a href="http://github.com/Prian04/">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.instagram.com/prian_fdo/">
          Prian Fernando
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.instagram.com/techoexperts/">
          Techoexpert
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
