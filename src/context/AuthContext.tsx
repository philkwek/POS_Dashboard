import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

/**
 * AuthContext: Manages global authentication state across the application.
 * Synchronizes with Firebase Auth to provide user data and auth methods.
 */
interface AuthContextType {
  user: User | null;         // Currently logged in user (null if signed out)
  loading: boolean;          // True while Firebase is initially checking for a user
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProvider: Component that wraps the app to provide auth state to all children.
 */
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Listen for authentication state changes (sign-in/sign-out)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    // Cleanup listener on unmount
    return unsubscribe;
  }, []);

  // Method to sign in with email and password
  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // Method to sign out
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, logout }}>
      {/* Don't render children until we've checked the initial auth state */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

/**
 * useAuth: Custom hook to easily access auth state in any component.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
