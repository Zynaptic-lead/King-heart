"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Project } from "@/types";
import { PROJECTS as DEFAULT_PROJECTS } from "@/data/projects";
import { useAuth } from "./AuthContext";

interface ProjectContextType {
  projects: Project[];
  addProject: (newProject: Project) => Promise<void>;
  deleteProject: (slug: string) => Promise<void>;
  updateProject: (slug: string, updated: Partial<Project>) => void;
  getProjectBySlug: (slug: string) => Project | undefined;
  resetToDefault: () => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://king-heart-backend.onrender.com/api";
const STORAGE_KEY = "kingheart_published_projects";

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchProjectsFromApi = async () => {
      try {
        const response = await fetch(`${API_BASE}/projects`);
        if (response.ok) {
          const apiProjects = await response.json();
          if (Array.isArray(apiProjects)) {
            setProjects(apiProjects);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(apiProjects));
            setIsLoaded(true);
            return;
          }
        }
      } catch (e) {
        console.warn("NestJS Render API offline, loading from local cache", e);
      }

      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setProjects(parsed);
            setIsLoaded(true);
            return;
          }
        } catch (e) {}
      }

      setProjects(DEFAULT_PROJECTS);
      setIsLoaded(true);
    };

    fetchProjectsFromApi();
  }, []);

  const addProject = async (newProject: Project) => {
    setProjects((prev) => {
      const updated = [newProject, ...prev];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });

    try {
      if (token) {
        await fetch(`${API_BASE}/projects`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newProject),
        });
      }
    } catch (e) {
      console.warn("NestJS API offline, saved project to localStorage only", e);
    }
  };

  const deleteProject = async (slug: string) => {
    setProjects((prev) => {
      const updated = prev.filter((p) => p.slug !== slug);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });

    try {
      if (token) {
        await fetch(`${API_BASE}/projects/${slug}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (e) {
      console.warn("NestJS API offline, removed from localStorage", e);
    }
  };

  const updateProject = (slug: string, updated: Partial<Project>) => {
    setProjects((prev) => {
      const list = prev.map((p) => (p.slug === slug ? { ...p, ...updated } : p));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      return list;
    });
  };

  const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find((p) => p.slug === slug);
  };

  const resetToDefault = () => {
    setProjects(DEFAULT_PROJECTS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        deleteProject,
        updateProject,
        getProjectBySlug,
        resetToDefault,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("useProjects must be used within a ProjectProvider");
  return context;
};
