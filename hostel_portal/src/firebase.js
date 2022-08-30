import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRgirZlWKEZRKUrAsDbOc2y8zJbRdHhjc",

  authDomain: "hostel-portal-app.firebaseapp.com",

  projectId: "hostel-portal-app",

  storageBucket: "hostel-portal-app.appspot.com",

  messagingSenderId: "110622336474",

  appId: "1:110622336474:web:a195855c1cd0f0f4c2cce3"

  };
 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);