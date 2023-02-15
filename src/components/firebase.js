import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';  //for authentication
// import 'firebase/compat/storage';  //for storage
// import 'firebase/compat/database'; //for realtime database
// import 'firebase/compat/firestore'; // for cloud firestore



const firebaseConfig = {
    apiKey: "AIzaSyDwgwJu1K8EYalAcXpxxoL4upaXKnCHjZs",
    authDomain: "posts-app-frontend.firebaseapp.com",
    projectId: "posts-app-frontend",
    storageBucket: "posts-app-frontend.appspot.com",
    messagingSenderId: "80739487301",
    appId: "1:80739487301:web:03f5a013d1132e371a1d2c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export {auth, provider}
// export default db;