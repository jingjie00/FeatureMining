// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyC5ybdNyjFhzw2lw5L9r2laPycG5Mg_cHU",
    authDomain: "donto-8ab38.firebaseapp.com",
    projectId: "donto-8ab38",
    storageBucket: "donto-8ab38.appspot.com",
    messagingSenderId: "366989959436",
    appId: "1:366989959436:web:cc036f28966bd274866929"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;