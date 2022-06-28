import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAgFofrZOmOJAL9qTMzHTevNzG0g7ky-48",
  authDomain: "dojosite-4c965.firebaseapp.com",
  projectId: "dojosite-4c965",
  storageBucket: "dojosite-4c965.appspot.com",
  messagingSenderId: "122500874730",
  appId: "1:122500874730:web:85db9229b7efc38d403293"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestap
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }