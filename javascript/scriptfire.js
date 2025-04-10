
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, set, get, ref, update, remove } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const db= getDatabase(app)

console.log(db)

//Function to write user data to firebase real time database
function writeUserData(userId, name, email){
  const db=getDatabase();
//create a reference/points to 'users/(userid)' and set the data (name and email)
  set(ref(db, 'users/'+userId),{
    name:name,
    email: email
  });
}
writeUserData(2, "PBS4", "praptirijal@gmail.com")


function readUser(){
  const userRef= ref(db, 'users')

  get(userRef).then((snapshot)=>{
    snapshot.forEach((childsnapshot)=>{
      console.log(childsnapshot.val());
    })
  })
}
readUser()


//update the data
function updateUserData(userId, updatedData){
  const userRef=ref(db, 'users/' +userId);
  update(userRef, updatedData)
    .then(()=>{
      console.log("user updated successfully");
    })
    .catch((error)=>{
      console.error("Error updating user:", error);
    });
}


//remove user data
function deleteUserData(userId){
  const userRef=ref(db, 'users/'+ userId);
  remove(userRef)
    .then(()=>{
      console.log("user removed successfully");
    })
    .catch((error)=>{
      console.error("Error deleting user:", error);
    });
}