import React from "react";
import SignIn from "./SignIn";

export default ({ setView }) => {
  return (
    <div id="bottom-nav">
      <button onClick={() => setView("split")}>Split</button>
      <button onClick={() => setView("chart")}>Chart</button>
      <button onClick={() => setView("stats")}>Stats</button>
      <SignIn />
    </div>
  );
};
