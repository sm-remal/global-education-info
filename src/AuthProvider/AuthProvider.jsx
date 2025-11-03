import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // * Create user

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // * Google logIn user
  const logInGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // * Email & Password logIn user

  const userLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // * User onAuth Sate
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // * User signOut
  const userSignOut = () => {
    return signOut(auth);
  };

  // * Update user

  const updateUserInfo = (ProfileInfo) => {
    return updateProfile(auth.currentUser, ProfileInfo);
  };

  // * User Info
  const userInfo = {
    createUser,
    logInGoogle,
    user,
    setUser,
    loading,
    userSignOut,
    updateUserInfo,
    userLogIn,
  };

  return (
    <>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
