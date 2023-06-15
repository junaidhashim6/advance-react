import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGJwZp0nM0IQ4VymqgjE6d-OWp0zzNEqk",
  authDomain: "crwn-clothing-db-4dfc0.firebaseapp.com",
  projectId: "crwn-clothing-db-4dfc0",
  storageBucket: "crwn-clothing-db-4dfc0.appspot.com",
  messagingSenderId: "902855557220",
  appId: "1:902855557220:web:e5997097ce4264f8b81f71",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }
  console.log("User Already exists!");
};

// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithRedirect,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "firebase/auth";
// import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk",
//   authDomain: "crwn-clothing-db-98d4d.firebaseapp.com",
//   projectId: "crwn-clothing-db-98d4d",
//   storageBucket: "crwn-clothing-db-98d4d.appspot.com",
//   messagingSenderId: "626766232035",
//   appId: "1:626766232035:web:506621582dab103a4d08d6",
// };

// const firebaseApp = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: "select_account",
// });

// export const auth = getAuth();
// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// export const db = getFirestore();

// export const createUserDocumentFromAuth = async (userAuth) => {
//   const userDocRef = doc(db, "users", userAuth.uid);

//   const userSnapshot = await getDoc(userDocRef);
//   console.log(userSnapshot.exists());
// };

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//       });
//     } catch (error) {
//       console.log("error creating the user", error.message);
//     }
//   }

//   return userDocRef;
// };
