import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/portfolioData';


export default function ProjectSection() {
  return (
    <section id="projects" className="py-16">
      <div className="">
        <h2 className="text-2xl md:text-4xl font-bold my-3">{projects.heading}</h2>
        <p className='mb-12 text-slate-400'>
          {projects.sectionDescription}
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.projectList.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
