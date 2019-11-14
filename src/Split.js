import React from "react";
import bStorage from "./Backend";

function splitIt(){
	let choice = Math.floor(Math.random() * 2);
	bStorage.setSplit("XXX", "ZZZ", choice);
}

export default () => (
  <div>
    <input type="text" defaultValue="Take a Chance" />
    <input type="text" defaultValue="Play it Safe" />
    <button onClick={() => splitIt()} >Split</button>
  </div>
);
