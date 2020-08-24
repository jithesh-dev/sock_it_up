import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAa_2cPF9Oj6v5POb769KSoghEVGrDwwyk",
  authDomain: "sockitup-2b8e9.firebaseapp.com",
  databaseURL: "https://sockitup-2b8e9.firebaseio.com",
  projectId: "sockitup-2b8e9",
  storageBucket: "sockitup-2b8e9.appspot.com",
  messagingSenderId: "1002456848943",
  appId: "1:1002456848943:web:26697c8151c0e8196344da",
  measurementId: "G-NED11VQZX6",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log(userAuth);
  const userRef = db.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export { auth, googleProvider };
export default db;
