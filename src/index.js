import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyB2aJpt2R4535TtgALWPOYJUwtTJkBZXZQ",
  authDomain: "universe-splitter.firebaseapp.com",
  databaseURL: "https://universe-splitter.firebaseio.com",
  projectId: "universe-splitter",
  storageBucket: "universe-splitter.appspot.com",
  messagingSenderId: "954112535896",
  appId: "1:954112535896:web:916fbb0a87965b9823c92d",
  measurementId: "G-ENM2CB3L12"
};


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
