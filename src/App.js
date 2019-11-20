import React, { useState } from "react";
import Split from "./Split";
import Chart from "./Chart";
import Stats from "./Stats";
import BottomNav from "./BottomNav";
import "./App.css";
import SignIn from "./SignIn";

function App() {
  const [view, setView] = useState("split");
  const [loggedIn, setLoggedIn] = useState(false);
  
  console.log(">", loggedIn);

  if(loggedIn){
    return (
      <div className="App">
        <div className="AppBorder">
          {view === "split" && <Split />}
          {view === "chart" && <Chart />}
          {view === "stats" && <Stats />}
          <BottomNav setView={setView} setLoggedIn={setLoggedIn} />
          </div>
      </div>
    );
  } else {
    return(
      <div className="App">
        <div className="AppBorder">
        <h1>
          Spinning <br />Electrons <br/>
          <span className="loader__dot">.</span><span className="loader__dot">.</span><span className="loader__dot">.</span>
        </h1>
        <SignIn setLoggedIn={setLoggedIn} />
        </div>
      </div>
    );
  }
}

export default App;
