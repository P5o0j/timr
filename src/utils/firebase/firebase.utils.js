import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_nhXWF7SKSaKR71nJEs_LH0-hOcl7APA",
  authDomain: "timr-db.firebaseapp.com",
  projectId: "timr-db",
  storageBucket: "timr-db.appspot.com",
  messagingSenderId: "453650838883",
  appId: "1:453650838883:web:4a85b6623f1dbf3f1d4f56",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};
