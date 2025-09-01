"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLogged: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("admin");
    if (stored) setIsLogged(true);
  }, []);

  const login = () => {
    localStorage.setItem("admin", "islogged");
    setIsLogged(true);
  };

  const logout = () => {
    localStorage.removeItem("admin");
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
