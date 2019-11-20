import React from "react";
import * as firebase from "firebase/app";

export default ({ setView, setLoggedIn }) => {
  return (
    <div id="bottom-nav">
      <button onClick={() => setView("split")}>Split</button>
      <button onClick={() => setView("chart")}>Chart</button>
      <button onClick={() => setView("stats")}>Stats</button>
      <button onClick={() => {firebase.auth().signOut(); setLoggedIn(false);}}>
          Sign-out
      </button>
    </div>
  );
};
