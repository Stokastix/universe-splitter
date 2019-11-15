import React, { useState } from "react";

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
      <span className="split-button">Split</span>
    </div>
  );
};
