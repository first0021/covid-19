import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAVgyVyTQC8WOoFU5a3VxTKL1WRjxpISJE",
  authDomain: "covid-19-e91cd.firebaseapp.com",
  projectId: "covid-19-e91cd",
  storageBucket: "covid-19-e91cd.appspot.com",
  messagingSenderId: "513554200331",
  appId: "1:513554200331:web:5dae2997b1d3363e52540e",
  measurementId: "G-THLN0C2MLB"
});
const db = getFirestore(firebaseApp);
export default db;
