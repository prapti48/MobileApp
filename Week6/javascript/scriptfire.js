// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, set, get, ref } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "{your- api- key }",
  authDomain: "yatra-ko-sathi.firebaseapp.com",
  projectId: "yatra-ko-sathi",
  storageBucket: "yatra-ko-sathi.firebasestorage.app",
  messagingSenderId: "59070134784",
  appId: "1:59070134784:web:fbf76fe57f1cf32c8af6e5",
  measurementId: "G-095828W7ES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Handle Sign Up Form Submit
const signupForm = document.getElementById("signupForm");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return;
  }

  // Generate unique user ID (e.g., timestamp-based)
  const userId = Date.now();

  // Save to Firebase Realtime Database
  set(ref(db, 'users/' + userId), {
    fullname: fullname,
    email: email,
    password: password // Note: Never store plain passwords in real apps
  })
    .then(() => {
      message.textContent = "Sign up successful!";
      message.style.color = "blue";
      signupForm.reset();
    })
    .catch((error) => {
      console.error("Error writing to database:", error);
      message.textContent = "Failed to sign up.";
      message.style.color = "red";
    });
});