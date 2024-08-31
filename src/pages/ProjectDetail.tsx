// src/pages/ProjectDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useTheme } from "../contexts/ThemeContext";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const id = parseInt(projectId ?? "", 10);
  const project = projects.find((p) => p.id === id);
  const { theme } = useTheme();

  if (!project) {
    return (
      <div className={`px-16 py-8 min-h-screen ${theme === 'light' ? 'bg-pink-100 text-pink-900' : 'bg-gray-900 text-white'}`}>
        <h1 className={`text-3xl font-bold mb-4 ${theme === 'light' ? 'text-pink-900' : 'text-white'}`}>Project Not Found</h1>
        <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : ''}`}>The project with ID {id} could not be found.</p>
      </div>
    );
  }

  return (
    <div className={`px-16 py-8 min-h-screen ${theme === 'light' ? 'bg-pink-100 text-pink-900' : 'bg-gray-900 text-white'}`}>
      <h1 className={`text-4xl font-bold mb-8 ${theme === 'light' ? 'text-pink-900' : 'text-white'}`}>{project.name}</h1>
      <div className="flex flex-col md:flex-row items-center gap-x-12">
        <img
          src={`/images/projects/${project.image}`}
          alt={project.name}
          className="w-full md:w-1/2 h-72 object-cover rounded-md mb-4 md:mb-0"
        />
        <div className="flex flex-col gap-y-8">
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : ''}`}>{project.description}</p>
          <div className="flex flex-col md:flex-row gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-${theme === 'light' ? 'pink-900' : 'gray-800'} text-white px-4 py-2 rounded-md hover:bg-${theme === 'light' ? 'pink-700' : 'gray-700'} transition-colors duration-300`}
            >
              View Project
            </a>
            <div className="flex flex-wrap gap-2">
              <span className={`bg-${theme === 'light' ? 'pink-900' : 'gray-800'} text-white px-3 py-1 rounded-md`}>
                Tech Stack
              </span>
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`bg-${theme === 'light' ? 'pink-900' : 'gray-800'} text-white px-3 py-1 rounded-md`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
