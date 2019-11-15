import React, { useState } from "react";
import bStorage from "./Backend";

function splitIt(x, y) {
  console.log(x, y);
  let choice = Math.floor(Math.random() * 2);
  bStorage.setSplit(x, y, choice);
}

export default () => {
  const [inputA, setInputA] = useState("Take a Chance");
  const [inputB, setInputB] = useState("Play it Safe");

  return (
    <div id="splitter-root">
      <h1>Universe Splitter</h1>
      <h2>Quantum-Induce</h2>
      <h2>Universe Bifurcation</h2>

      <p>In one universe I will:</p>
      <input
        type="text"
        defaultValue={inputA}
        onChange={e => setInputA(e.target.value)}
      />
      <p>In another I will:</p>
      <input
        type="text"
        defaultValue={inputB}
        onChange={e => setInputB(e.target.value)}
      />

      <span className="split-button" onClick={() => splitIt(inputA, inputB)}>
        Split
      </span>
    </div>
  );
};
