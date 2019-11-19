import React, { useState } from "react";
import Split from "./Split";
import Chart from "./Chart";
import Stats from "./Stats";
import BottomNav from "./BottomNav";
import "./App.css";

function App() {
  const [view, setView] = useState("split");
  return (
    <div className="App">
      {view === "split" && <Split />}
      {view === "chart" && <Chart />}
      {view === "stats" && <Stats />}
      <BottomNav setView={setView} />
    </div>
  );
}

export default App;
