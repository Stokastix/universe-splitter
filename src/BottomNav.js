import React from "react";
import * as firebase from "firebase/app";
import CallSplitIcon from '@material-ui/icons/CallSplit';
import TimelineIcon from '@material-ui/icons/Timeline';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SettingsIcon from '@material-ui/icons/Settings';

export default ({ setView }) => {
  return (
    <div id="bottom-nav">
      <button onClick={() => setView("split")}><CallSplitIcon /></button>
      <button onClick={() => setView("chart")}><TimelineIcon /></button>
      <button onClick={() => setView("stats")}><AssessmentIcon /></button>
      <button onClick={() => setView("settings")}><SettingsIcon /></button>
    </div>
  );
};
