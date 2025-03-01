// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider  } from "firebase/auth";

// Your Firebase Config (Replace with your values)
const firebaseConfig = {
  apiKey: "AIzaSyB85WvGS1RFSUdLpPwfDU9i8aR9OCmS_lE",
  authDomain: "bloodconnect-70c4a.firebaseapp.com",
  projectId: "bloodconnect-70c4a",
  storageBucket: "bloodconnect-70c4a.firebasestorage.app",
  messagingSenderId: "626200485144",
  appId: "1:626200485144:web:b0f24b3fea627df498126d",
  measurementId: "G-SNHV3M6KZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
