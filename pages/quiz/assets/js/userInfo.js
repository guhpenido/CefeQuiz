//References
import { auth, db } from "../../../../pages/login/assets/js/firebase.js";


async function getUserInfo() {
  // Listen for changes in authentication state
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user) {
      // User is signed in
      console.log("User is signed in:", user);
      localStorage.setItem("uid", user.uid);
    } else {
      alert("Você não está logado!");
      window.location.href = "../../../../pages/login/login.html";
    }
    // Unsubscribe to the listener
    unsubscribe();
  });
}

// Call the function when the page loads
getUserInfo();