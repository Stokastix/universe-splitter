import React, { useState } from "react";
import bStorage from "./Backend";

const pretty = n => {
  if (!n || n < 10000) return n;
  const a = n.toExponential(2).split("e+");
  return a[0] + "·10^" + a[1];
};

export default () => {
  const [n, setN] = useState(null);
  if (n === null) {
    bStorage.readUniverses(x => setN(x.count));
    return (
      <div id="stats-root">
        <h1>.</h1>
      </div>
    );
  }
  return (
    <div id="stats-root">
      <h2>THE UNIVERSE</h2>
      <h2>HAS BEEN SPLIT</h2>
      <h1>{pretty(n)}</h1>
      <h2>TIMES</h2>
    </div>
  );
};
