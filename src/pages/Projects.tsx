// src/pages/Projects.tsx
import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useTheme } from "../contexts/ThemeContext";

const Projects: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`px-16 py-8 min-h-screen ${theme === 'light' ? 'bg-pink-100 text-pink-900' : 'bg-gray-900 text-white'}`}>
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'light' ? 'text-pink-900' : 'text-white'}`}>My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
