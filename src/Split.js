import React from "react";
import bStorage from "./Backend";

function splitIt() {
  let choice = Math.floor(Math.random() * 2);
  bStorage.setSplit("XXX", "ZZZ", choice);
}

export default () => {
  return (
    <div id="splitter-root">
      <h1>Universe Splitter</h1>
      <h2>Quantum-Induce</h2>
      <h2>Universe Bifurcation</h2>

      <p>In one universe I will:</p>
      <input type="text" defaultValue="Take a Chance" />
      <p>In another I will:</p>
      <input type="text" defaultValue="Play it Safe" />

      <span className="split-button" onClick={() => splitIt()}>
        Split
      </span>
    </div>
  );
};
