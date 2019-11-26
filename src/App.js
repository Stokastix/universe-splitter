import React, { useState } from "react";
import Split from "./Split";
import Chart from "./Chart";
import Stats from "./Stats";
import BottomNav from "./BottomNav";
import "./App.css";
import SignIn from "./SignIn";
import Settings from "./Settings";


function App() {
  const [view, setView] = useState("split");
  const [loggedIn, setLoggedIn] = useState(false);
  
  console.log(">", loggedIn);

  if(loggedIn){
    return (
      <div className="App">
        {view === "split" && <Split />}
        {view === "chart" && <Chart />}
        {view === "stats" && <Stats />}
        {view === "settings" && <Settings setLoggedIn={setLoggedIn} />}
        <BottomNav setView={setView} />
      </div>
    );
  } else {
    return(
      <div className="App">
        <h1>
          Spinning <br />Electrons <br/>
          <span className="loader__dot">.</span><span className="loader__dot">.</span><span className="loader__dot">.</span>
        </h1>
        <SignIn setLoggedIn={setLoggedIn} />
      </div>
    );
  }
}

export default App;
