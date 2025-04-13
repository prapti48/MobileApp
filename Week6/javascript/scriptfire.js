// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, set, get, ref } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxaVXNO87GI2X--zJkcZBtsSdrPseJogs",
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


//   // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// import { getDatabase, set, get, ref, update, remove } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBxaVXNO87GI2X--zJkcZBtsSdrPseJogs",
//   authDomain: "yatra-ko-sathi.firebaseapp.com",
//   projectId: "yatra-ko-sathi",
//   storageBucket: "yatra-ko-sathi.firebasestorage.app",
//   messagingSenderId: "59070134784",
//   appId: "1:59070134784:web:fbf76fe57f1cf32c8af6e5",
//   measurementId: "G-095828W7ES"
// };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);
//   const db= getDatabase(app)

// console.log(db)



// //Function to write user data to firebase real time database
// function writeUserData(fullname, name, email, password){
//   const db=getDatabase();
// //create a reference/points to 'users/(userid)' and set the data (name and email)
//   set(ref(db, 'users/'+userId),{
//     name:name,
//     email: email
    
//   });
// }
// writeUserData(3, "PBS333", "praptirijal@gmail.com")

// //read user data
// function readUser(){
//   const userRef= ref(db, 'users')

//   get(userRef).then((snapshot)=>{
//     snapshot.forEach((childsnapshot)=>{
//       console.log(childsnapshot.val());
//     })
//   })
// }
// readUser()


// //update the data
// function updateUserData(userId, updatedData){
//   const userRef=ref(db, 'users/' +userId);
//   update(userRef, updatedData)
//     .then(()=>{
//       console.log("user updated successfully");
//     })
//     .catch((error)=>{
//       console.error("Error updating user:", error);
//     });
// }


// //remove user data
// function deleteUserData(userId){
//   const userRef=ref(db, 'users/'+ userId);
//   remove(userRef)
//     .then(()=>{
//       console.log("user removed successfully");
//     })
//     .catch((error)=>{
//       console.error("Error deleting user:", error);
//     });
// }


// // // Example usage:
// deleteUserData(2);

// console.log("Added! Good")


// signup.js

