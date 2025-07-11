import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    currentUser: null,
    loading: true,
    error: null
  });
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      try {
        if (firebaseUser) {
          const userRef = doc(db, "users", firebaseUser.uid);
          const userDoc = await getDoc(userRef);
  
          if (!userDoc.exists()) {
            // CREATE NEW USER DOCUMENT
            await setDoc(userRef, {
              email: firebaseUser.email,
              username: firebaseUser.email?.split('@')[0] || 'User',
              profileComplete: false,
              createdAt: new Date()
            });
          }
  
          setUserState({
            currentUser: {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              ...(userDoc.exists() ? userDoc.data() : {
                profileComplete: false,
                username: firebaseUser.email?.split('@')[0] || 'User'
              })
            },
            loading: false,
            error: null
          });
        }
      } catch (error) {
        // Error handling
      }
    });
    return unsubscribe;
  }, []);
  

  // Context value includes setter function to update user
  const value = {
    ...userState,
    setCurrentUser: (updates) => setUserState(prev => ({
      ...prev,
      currentUser: { ...prev.currentUser, ...updates }
    }))
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook with validation
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}