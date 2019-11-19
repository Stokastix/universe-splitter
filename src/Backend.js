import "firebase/auth";
import "firebase/firestore";
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2aJpt2R4535TtgALWPOYJUwtTJkBZXZQ",
  authDomain: "universe-splitter.firebaseapp.com",
  databaseURL: "https://universe-splitter.firebaseio.com",
  projectId: "universe-splitter",
  storageBucket: "universe-splitter.appspot.com",
  messagingSenderId: "954112535896",
  appId: "1:954112535896:web:916fbb0a87965b9823c92d",
  measurementId: "G-ENM2CB3L12"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.enablePersistence()
  .catch(function(err) {console.log("error enabling cache:", err);});

class backendStorage {
  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setUserId(user.uid);
      }
    });
    
    this.enableNetwork(true);
  }

  enableNetwork(state){
    if(state){
      console.log("network enabled");
      this.network = db.enableNetwork();
    } else {
      console.log("network disabled");
      this.network = db.disableNetwork();
    }
  }

  setUserId(userId) {
    this.userCollection = db.collection("Users").doc(userId);
    this.splitsRef = this.userCollection.collection("splits");
    console.log("User Connected");
  }

  getLastSplits(n, callback) {
    var that = this;
    this.network.then( function(){
      that.splitsRef
      .orderBy("timestamp", "desc")
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        
        console.log("collecting documents... (from cache:", snapshot.metadata.fromCache, ")");
        var docs = Object()
        snapshot.forEach(doc => docs[doc.id] = doc.data() );
        callback(docs);

        that.enableNetwork(false);
      })
      .catch(err => console.log('Error getting documents', err) );
    });

  }

  getSplit(id, callback) {
    this.splitsRef
      .doc(id)
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          callback(doc.data());
        }
      })
      .catch(err => {
        console.log("Error getting document", err);
      });
  }

  setSplit(option0, option1, choice) {
    console.log("splitting universe");
    let data = {
      options: [option0, option1],
      selectedOption: choice,
      timestamp: Date.now()
    };

    this.enableNetwork(true);

    var that = this;
    this.network.then( function() {
        that.splitsRef
        .add(data)
        .catch(err => {
          console.log('Error writing document', err);
        });

        that.enableNetwork(false);
      }
    );
  }

  delSplit(id) {
    this.splitsRef
      .doc(id)
      .delete()
      .catch(err => {
        console.log("Error deleting document", err);
      });
  }

  incrementUniverse() {
    const increment = firebase.firestore.FieldValue.increment(1);
    const universeRef = db.collection("Universes").doc("142857143");
    universeRef.update({ count: increment });
  }
}

let bStorage = new backendStorage();
export default bStorage;

/* Examples:

bStorage.setSplit("ABC", "XYZ", 1);
bStorage.delSplit("ztJeSQXkMUOUkCKSiydV");
*/
