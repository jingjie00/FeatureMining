// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAXKqSsaOCx-lJS4Wtiz-c3qSdVGXypcjQ",
  authDomain: "feature-mining.firebaseapp.com",
  projectId: "feature-mining",
  storageBucket: "feature-mining.appspot.com",
  messagingSenderId: "844727729332",
  appId: "1:844727729332:web:67ec7b176cfe736a392be1",
  measurementId: "G-EZ7X69KTBM"
};

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;