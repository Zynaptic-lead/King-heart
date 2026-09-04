"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface AdminUser {
  id?: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  adminUser: AdminUser | null;
  token: string | null;
  login: (email: string, pass: string) => Promise<boolean>;
  register: (name: string, email: string, pass: string, accessKey: string) => Promise<{ success: boolean; error?: string }>;
  updateProfile: (avatarUrl: string, name?: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://king-heart-backend.onrender.com/api";
const ADMIN_PASSCODE = "KINGHEART2026";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedAuth = localStorage.getItem("kingheart_admin_auth");
      if (storedAuth) {
        const parsed = JSON.parse(storedAuth);
        if (parsed && parsed.isAuthenticated && parsed.adminUser) {
          setIsAuthenticated(true);
          setAdminUser(parsed.adminUser);
          setToken(parsed.token || null);
        }
      }
    } catch (e) {
      console.error("Auth context parse error", e);
    }
  }, []);

  const login = async (email: string, pass: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: pass }),
      });

      if (response.ok) {
        const data = await response.json();
        const userObj: AdminUser = {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          avatarUrl: data.user.avatarUrl,
        };
        setIsAuthenticated(true);
        setAdminUser(userObj);
        setToken(data.accessToken);
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "kingheart_admin_auth",
            JSON.stringify({ isAuthenticated: true, adminUser: userObj, token: data.accessToken })
          );
        }
        return true;
      }
    } catch (e) {
      console.warn("NestJS API login offline, falling back to local auth", e);
    }

    if (email.toLowerCase() === "kingh10847@gmail.com" && pass === "admin123") {
      const user = { name: "King Heart", email: "kingh10847@gmail.com" };
      setIsAuthenticated(true);
      setAdminUser(user);
      if (typeof window !== "undefined") {
        localStorage.setItem("kingheart_admin_auth", JSON.stringify({ isAuthenticated: true, adminUser: user }));
      }
      return true;
    }

    return false;
  };

  const register = async (
    name: string,
    email: string,
    pass: string,
    accessKey: string
  ): Promise<{ success: boolean; error?: string }> => {
    if (accessKey.trim() !== ADMIN_PASSCODE) {
      return { success: false, error: "Invalid Admin Access Passcode. Key: KINGHEART2026" };
    }

    try {
      const response = await fetch(`${API_BASE}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password: pass, accessKey }),
      });

      const data = await response.json();
      if (response.ok) {
        const userObj: AdminUser = {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          avatarUrl: data.user.avatarUrl,
        };
        setIsAuthenticated(true);
        setAdminUser(userObj);
        setToken(data.accessToken);
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "kingheart_admin_auth",
            JSON.stringify({ isAuthenticated: true, adminUser: userObj, token: data.accessToken })
          );
        }
        return { success: true };
      } else {
        return { success: false, error: data.message || "Registration failed" };
      }
    } catch (e) {
      console.warn("NestJS API register offline, saving locally", e);
      const userObj = { name, email };
      setIsAuthenticated(true);
      setAdminUser(userObj);
      if (typeof window !== "undefined") {
        localStorage.setItem("kingheart_admin_auth", JSON.stringify({ isAuthenticated: true, adminUser: userObj }));
      }
      return { success: true };
    }
  };

  const updateProfile = async (avatarUrl: string, name?: string): Promise<boolean> => {
    if (!adminUser) return false;

    const updatedUser: AdminUser = {
      ...adminUser,
      avatarUrl,
      ...(name && { name }),
    };

    setAdminUser(updatedUser);
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "kingheart_admin_auth",
        JSON.stringify({ isAuthenticated, adminUser: updatedUser, token })
      );
    }

    try {
      if (token) {
        await fetch(`${API_BASE}/auth/profile`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ avatarUrl, name }),
        });
      }
    } catch (e) {
      console.warn("NestJS API update profile offline, saved locally", e);
    }

    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAdminUser(null);
    setToken(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("kingheart_admin_auth");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, adminUser, token, login, register, updateProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
