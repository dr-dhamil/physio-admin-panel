import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAHqSbNhcyko0OtKhtOhAMVnFKWVg3SiQ",
  authDomain: "drgpw-c8b7f.firebaseapp.com",
  projectId: "drgpw-c8b7f",
  storageBucket: "drgpw-c8b7f.firebasestorage.app",
  messagingSenderId: "74900215731",
  appId: "1:74900215731:web:bb5d7d7edb267567bf1dc6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
