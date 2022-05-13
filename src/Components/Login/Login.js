import React from 'react'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState , useContext } from 'react';
import { UserContext } from '../../App';




export const Login = () => {
  const [user, setUser] = useState({
    isSignedIn : false,
    email : '',
    name: '',
    photo: ''
  })

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
  .then((res) => {
  
    const {displayName, photoURL, email, password} = res.user;
             const signedInUser = {
               isSignedIn: true,
               name:displayName,
               email:email
             }
             setUser(signedInUser);
             setLoggedInUser(signedInUser)
           

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  }

  return (
    <div>
      <button onClick={handleGoogleSignIn}> Login
        </button></div>
  )
}
