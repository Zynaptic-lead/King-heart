"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Project } from "@/types";
import { PROJECTS as DEFAULT_PROJECTS } from "@/data/projects";

interface ProjectContextType {
  projects: Project[];
  addProject: (newProject: Project) => void;
  deleteProject: (slug: string) => void;
  updateProject: (slug: string, updated: Partial<Project>) => void;
  getProjectBySlug: (slug: string) => Project | undefined;
  resetToDefault: () => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const STORAGE_KEY = "kingheart_published_projects";

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setProjects(parsed);
        }
      } catch (e) {
        console.error("Failed to parse stored projects", e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    }
  }, [projects, isLoaded]);

  const addProject = (newProject: Project) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const deleteProject = (slug: string) => {
    setProjects((prev) => prev.filter((p) => p.slug !== slug));
  };

  const updateProject = (slug: string, updated: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((p) => (p.slug === slug ? { ...p, ...updated } : p))
    );
  };

  const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find((p) => p.slug === slug) || DEFAULT_PROJECTS.find((p) => p.slug === slug);
  };

  const resetToDefault = () => {
    setProjects(DEFAULT_PROJECTS);
    localStorage.removeItem(STORAGE_KEY);
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
