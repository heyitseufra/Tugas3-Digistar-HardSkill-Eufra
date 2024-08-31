// src/components/ProjectCard.tsx
import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  theme: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  image,
  description,
  theme,
}) => {
  return (
    <Link
      to={`/projects/${id}`}
      className={`border rounded-lg overflow-hidden shadow-lg ${theme === 'light' ? 'bg-white text-pink-900' : 'bg-gray-800 text-white'} hover:shadow-xl transition-shadow duration-300`}
    >
      <img
        src={`/images/projects/${image}`}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className={`text-2xl font-bold mb-2 ${theme === 'light' ? 'text-pink-900' : 'text-white'}`}>{name}</h2>
        <p className={`text-gray-700 ${theme === 'dark' ? 'text-gray-400' : ''}`}>{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
