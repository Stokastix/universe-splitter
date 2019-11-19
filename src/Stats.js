import React from "react";

const pretty = n => {
  console.log(n);
  if (n < 10000) return n;
  const a = n.toExponential(2).split("e+");
  console.log(a);
  return a[0] + "·10^" + a[1];
};

export default () => {
  return (
    <div id="stats-root">
      <h2>THE UNIVERSE</h2>
      <h2>HAS BEEN SPLIT</h2>
      <h1>{pretty(142)}</h1>
      <h2>TIMES</h2>
    </div>
  );
};
