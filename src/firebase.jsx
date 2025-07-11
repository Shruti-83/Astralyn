import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqh-_qGrVI1V3k-MxZsTCyhAHggNbYRKs",
  authDomain: "astralyn-13e96.firebaseapp.com",
  projectId: "astralyn-13e96",
  storageBucket: "astralyn-13e96.firebasestorage.app",
  messagingSenderId: "136919669931",
  appId: "1:136919669931:web:f05694758cfad104d8abee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);