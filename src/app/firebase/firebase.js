import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGZASD5CSQu6eI8w7isc6UIwUVVeXpyRI",
  authDomain: "registration-form-9e3cb.firebaseapp.com",
  projectId: "registration-form-9e3cb",
  storageBucket: "registration-form-9e3cb.appspot.com",
  messagingSenderId: "427392251930",
  appId: "1:427392251930:web:77609becda7f64534a39a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ---------- FIREBASE AUTH SECTION ----------
const auth = getAuth(app);
