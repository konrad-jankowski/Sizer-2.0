import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

const ToggleCardContext = createContext();

export function ToggleCardContextProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState({});

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {});
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <ToggleCardContext.Provider
      value={{ toggle, setToggle, signUp, logIn, logOut, user }}
    >
      {children}
    </ToggleCardContext.Provider>
  );
}

export function ToggleAuth() {
  return useContext(ToggleCardContext);
}
