import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB0KniZxOQa5e6vl1ihdv_ZXL9LZ6g4Ijg",
  authDomain: "book-santa-38462.firebaseapp.com",
  projectId: "book-santa-38462",
  storageBucket: "book-santa-38462.appspot.com",
  messagingSenderId: "695502004234",
  appId: "1:695502004234:web:0d19d3543fae349eedfff3"
};
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);

  if(!firebase.apps.length) { 
    firebase.initializeApp(firebaseConfig); 
  }


export default firebase.firestore();
