// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { readable } from "svelte/store";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCnkMeq0Rb_EiflADa2h1vg-bi3HJyHAk",
  authDomain: "svelte-chat-d8234.firebaseapp.com",
  projectId: "svelte-chat-d8234",
  storageBucket: "svelte-chat-d8234.appspot.com",
  messagingSenderId: "402612978923",
  appId: "1:402612978923:web:db98ae6dd9b37d7198aaae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app)

export const user = readable(auth.currentUser, (set) => auth.onAuthStateChanged((u) => set(u)))