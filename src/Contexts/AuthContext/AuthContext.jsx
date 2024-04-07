// AuthProvider.js
import React, { useState, useEffect, createContext, useContext } from "react";
import { auth } from "../../components/firebase/firebaseConfig";
import { createUser } from "../../requestHelper";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Create AuthContext
const AuthContext = createContext();

// Create AuthProvider component
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup function
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    const userDetails = {
      email,
      password,
      username: email,
      fullName: "User Name1",
      phoneNumber: "123-456-7789",
      location: "21 Jumpstreet",
      firebaseId: user._id
    };
    const response = await createUser(userDetails)
    console.log(response)
    return response
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const value = {
    currentUser,
    login,
    signup,
    loginWithGoogle,
    signOut: handleSignOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Create useAuth hook
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
