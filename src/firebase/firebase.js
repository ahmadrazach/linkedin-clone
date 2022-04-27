import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqRZI52lnqaxwN8FOxE2SOrL38F33TUd4",
  authDomain: "linkedin-clone-ea448.firebaseapp.com",
  projectId: "linkedin-clone-ea448",
  storageBucket: "linkedin-clone-ea448.appspot.com",
  messagingSenderId: "792919251029",
  appId: "1:792919251029:web:290b49b110abe25e27dcdc"
};

// Initialize Firebase 
const app = firebase.initializeApp(firebaseConfig);
//getting db and auth
const db=app.firestore();
const auth = firebase.auth();

export {db,auth};