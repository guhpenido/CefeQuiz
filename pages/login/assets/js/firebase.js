import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js"; 
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"; 
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
 
const firebaseConfig = {
    apiKey: "AIzaSyCB9RbyqZ4EMQJ3gGWc9wOrG7d_-_uNF7k",
    authDomain: "cefequiz.firebaseapp.com",
    projectId: "cefequiz",
    storageBucket: "cefequiz.appspot.com",
    messagingSenderId: "573193354789",
    appId: "1:573193354789:web:078c7561514885855ac9cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initiliaze Firebase Auth
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


