import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPyGLsZUIyNuS1rC-SNlUjGGPW83EtBMQ",
  authDomain: "sizer-clone.firebaseapp.com",
  projectId: "sizer-clone",
  storageBucket: "sizer-clone.appspot.com",
  messagingSenderId: "177164725711",
  appId: "1:177164725711:web:78d50b547fddbab01b36ba",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
