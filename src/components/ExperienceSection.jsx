import React from 'react';
import ExperienceEntry from './ExperienceEntry';
import { experiences } from '@/data/portfolioData';


export default function ExperienceSection() {
  return (
    <section id="experiences" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-12">{experiences.heading.toLocaleUpperCase()}</h2>
        <div className="relative border-l-2 border-blue-500 m-4">
          {experiences.experienceList.map((experience, index) => (
            <ExperienceEntry key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
