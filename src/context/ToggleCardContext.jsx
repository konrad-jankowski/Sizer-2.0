import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

const ToggleCardContext = createContext();

export function ToggleCardContextProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState({});
  const [test, setTest] = useState([]);
  const [inputData, setInputData] = useState([
    {
      firstName: "",
      email: "",
      password: "",
      url: "",
    },
  ]);

  const quantityy =
    test
      ?.map((product) => product.item.productSize)
      .filter(function (element) {
        return element !== undefined;
      }).length || 0;

  async function signUp(email, password) {
    await createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedFavorites: [],
      shoppingCartItems: [],
      orderHistory: [],
    });
  }

  console.log(user);

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      updateProfile(user, {
        displayName: inputData.firstName,
        photoURL: inputData.url,
      })
        .then(() => {
          console.log("good");
        })
        .catch((error) => {
          console.log("An error occurred");
        });
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <ToggleCardContext.Provider
      value={{
        toggle,
        setToggle,
        signUp,
        logIn,
        logOut,
        user,
        test,
        setTest,
        quantityy,
        inputData,
        setInputData,
      }}
    >
      {children}
    </ToggleCardContext.Provider>
  );
}

export function ToggleAuth() {
  return useContext(ToggleCardContext);
}

export function useShoppingCart() {
  return useContext(ToggleCardContext);
}
