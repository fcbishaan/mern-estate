// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-65e2f.firebaseapp.com",
  projectId: "mern-estate-65e2f",
  storageBucket: "mern-estate-65e2f.appspot.com",
  messagingSenderId: "258961394749",
  appId: "1:258961394749:web:b3d41acc64e264f8722e54"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);