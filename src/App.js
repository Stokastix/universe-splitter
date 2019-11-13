import React, { useState } from "react";
import Split from "./Split";
import Chart from "./Chart";
import Stats from "./Stats";
import "./App.css";

function App() {
  const [view, setView] = useState("split");
  return (
    <div className="App">
      {view === "split" && <Split />}
      {view === "chart" && <Chart />}
      {view === "stats" && <Stats />}
      <div id="bottom-nav">
        <button onClick={() => setView("split")}>Split</button>
        <button onClick={() => setView("chart")}>Chart</button>
        <button onClick={() => setView("stats")}>Stats</button>
      </div>
    </div>
  );
}

export default App;
