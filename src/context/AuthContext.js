import React, { useContext, useState, useEffect } from "react";
import { auth } from "./../config/Firebase";
import { getUser } from "./../services/UserService";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [currentUserFirstName, setCurrentUserFirstName] = useState("");
  const [currentUserLastName, setCurrentUserLastName] = useState("");
  const [currentUserType, setCurrentUserType] = useState("");

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(async () => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user != null) {
        try {
          const { data } = await getUser(user.uid);
          setCurrentUserFirstName(data.firstName);
          setCurrentUserLastName(data.lastName);
          setCurrentUserType(data.userType);
        } catch {}
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    currentUser,
    currentUserFirstName,
    currentUserLastName,
    currentUserType,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
