// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD90AGvgCNOHTCH3NIvUvTJ4DUJ1etW0AE",
  authDomain: "clone-app-13296.firebaseapp.com",
  databaseURL: "https://clone-app-13296.firebaseio.com",
  projectId: "clone-app-13296",
  storageBucket: "clone-app-13296.appspot.com",
  messagingSenderId: "28910310662",
  appId: "1:28910310662:web:afec7378f8647c685b3a87",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
