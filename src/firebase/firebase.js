import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaK8uQAqWyZ86Oiy00gE0pMzGwU7jU9Lg",
  authDomain: "curd-redux-tollkit.firebaseapp.com",
  projectId: "curd-redux-tollkit",
  storageBucket: "curd-redux-tollkit.appspot.com",
  messagingSenderId: "781774678719",
  appId: "1:781774678719:web:051665a5543214fd44b40a",
  measurementId: "G-Y4PXEQHST7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}