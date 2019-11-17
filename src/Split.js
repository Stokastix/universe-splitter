import React, { useState } from "react";
import bStorage from "./Backend";

const Splitter = ({ setSplit }) => {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");

  const splitIt = (x, y) => {
    if (!x || !y) return;
    const choice = Math.floor(Math.random() * 2);
    setSplit(choice > 0.5 ? x : y);
    bStorage.setSplit(x, y, choice);
  };

  return (
    <>
      <p>In one universe I will:</p>
      <input
        type="text"
        placeholder={"Take a Chance"}
        onChange={e => setInputA(e.target.value)}
      />
      <p>In another I will:</p>
      <input
        type="text"
        placeholder={"Play it Safe"}
        onChange={e => setInputB(e.target.value)}
      />

      {inputA && inputB && (
        <span className="split-button" onClick={() => splitIt(inputA, inputB)}>
          SPLIT
        </span>
      )}
    </>
  );
};

const ShowSplit = ({ split }) => {
  return (
    <>
      <p>Now you should:</p>
      <span className="show-split">{split}</span>
    </>
  );
};

export default () => {
  const [split, setSplit] = useState(undefined);

  return (
    <div id="splitter-root">
      <h1>Universe Splitter</h1>
      <h2>Quantum-Induce</h2>
      <h2>Universe Bifurcation</h2>
      {!split && <Splitter setSplit={setSplit} />}
      {split && <ShowSplit split={split} />}
    </div>
  );
};
