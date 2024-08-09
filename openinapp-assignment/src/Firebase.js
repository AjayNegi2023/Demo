// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC9rz3mBJr7eO33UPlKwv2FC0z1TSLalBw",
//   authDomain: "openinappassignment-940ce.firebaseapp.com",
//   projectId: "openinappassignment-940ce",
//   storageBucket: "openinappassignment-940ce.appspot.com",
//   messagingSenderId: "184120513408",
//   appId: "1:184120513408:web:8df25b6ca3e566252de765",
//   measurementId: "G-9BD6DNFM32"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export { auth, provider };



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPN2b-GovD960Twns_H9vz2g_c2bv3vdI",
  authDomain: "openinapp-5bc9c.firebaseapp.com",
  projectId: "openinapp-5bc9c",
  storageBucket: "openinapp-5bc9c.appspot.com",
  messagingSenderId: "355885906721",
  appId: "1:355885906721:web:07911161a1520a268d5c60",
  measurementId: "G-PPLJFDFGES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
export { auth, provider };