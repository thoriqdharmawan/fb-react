import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyS75BnOp4V5K_P88PrbQsapSFHTm1M90",
  authDomain: "fb-react-ex.firebaseapp.com",
  databaseURL: "https://fb-react-ex.firebaseio.com",
  projectId: "fb-react-ex",
  storageBucket: "fb-react-ex.appspot.com",
  messagingSenderId: "24257634756",
  appId: "1:24257634756:web:562b0ce35c59cb7107c491",
  measurementId: "G-RPZBSCD5KK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
