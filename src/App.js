import React from "react";
import Weather from "./Weather";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> hello</h1>
        <Weather city="London" />
      </header>
      <small>
        <a
          href="https://github.com/CamilaDelagnese/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Camila Delagnese
      </small>
    </div>
  );
}
export default App;
