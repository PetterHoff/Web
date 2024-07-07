// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNfqmOp-SR2-zvoM5c-f7ZTCGexD1jgmM",
  authDomain: "spania-e5fc6.firebaseapp.com",
  projectId: "spania-e5fc6",
  storageBucket: "spania-e5fc6.appspot.com",
  messagingSenderId: "605724906190",
  appId: "1:605724906190:web:b4644d4e2141c92eeb369f",
  measurementId: "G-SQRG0LMN0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth};
