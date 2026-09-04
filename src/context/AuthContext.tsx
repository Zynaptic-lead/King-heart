"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AdminUser {
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  adminUser: AdminUser | null;
  login: (email: string, pass: string) => boolean;
  register: (name: string, email: string, pass: string, accessKey: string) => { success: boolean; error?: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_PASSCODE = "KINGHEART2026";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem("kingheart_admin_auth");
    if (storedAuth) {
      try {
        const parsed = JSON.parse(storedAuth);
        if (parsed.isAuthenticated && parsed.adminUser) {
          setIsAuthenticated(true);
          setAdminUser(parsed.adminUser);
        }
      } catch (e) {
        console.error("Auth context parse error", e);
      }
    }
  }, []);

  const login = (email: string, pass: string): boolean => {
    const storedUser = localStorage.getItem("kingheart_registered_admin");
    let validUser = { name: "King Heart", email: "kingh10847@gmail.com", pass: "admin123" };
    
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed.email) validUser = parsed;
      } catch (e) {}
    }

    if (email.toLowerCase() === validUser.email.toLowerCase() && pass === validUser.pass) {
      const user = { name: validUser.name, email: validUser.email };
      setIsAuthenticated(true);
      setAdminUser(user);
      localStorage.setItem("kingheart_admin_auth", JSON.stringify({ isAuthenticated: true, adminUser: user }));
      return true;
    }
    return false;
  };

  const register = (
    name: string,
    email: string,
    pass: string,
    accessKey: string
  ): { success: boolean; error?: string } => {
    if (accessKey.trim() !== ADMIN_PASSCODE) {
      return { success: false, error: "Invalid Admin Access Passcode. Key: KINGHEART2026" };
    }

    const newUser = { name, email, pass };
    localStorage.setItem("kingheart_registered_admin", JSON.stringify(newUser));
    
    const userObj = { name, email };
    setIsAuthenticated(true);
    setAdminUser(userObj);
    localStorage.setItem("kingheart_admin_auth", JSON.stringify({ isAuthenticated: true, adminUser: userObj }));

    return { success: true };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAdminUser(null);
    localStorage.removeItem("kingheart_admin_auth");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, adminUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
