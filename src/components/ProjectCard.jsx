import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-[#9198a525] rounded-md shadow-lg rounded-lg overflow-hidden hover:shadow-custom transition-shadow duration-500">
      <div className="relative">
        <Image
          src={project.image}
          alt={project.name}
          width={600}
          height={400}
        layout=''
          className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="flex space-x-4">
          <a href={project.github} target="_blank" className="text-blue-500 flex items-center">
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a href={project.deployedLink} target="_blank" className="text-blue-500 flex items-center">
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
