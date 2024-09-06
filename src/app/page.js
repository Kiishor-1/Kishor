"use client"
import About from '@/components/About';
import Contact from '@/components/Contact';
import ExperienceSection from '@/components/ExperienceSection';
import Header from '@/components/Header';
import ProjectSection from '@/components/ProjectSection';
import SkillsSection from '@/components/SkillSection';
import ThreeBackground from '@/components/ThreeBackground';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div>
      <div className="">
        <Header/>
        {/* <ThreeBackground/> */}
        <SkillsSection/>
        <About />
        <ProjectSection/>
        <ExperienceSection/>
        <Contact />
      </div>
    </div>
  );
}
