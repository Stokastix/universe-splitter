import React from "react";
import * as firebase from "firebase/app";


export default ({setLoggedIn}) => {
    return(
        <div>
            <h>Settings</h>
            <button onClick={() => {firebase.auth().signOut(); setLoggedIn(false);}}>
                log out
            </button>
        </div>
    )
}