import React from 'react';
import { MagicContainer } from "@/components/magicui/magic-card";
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/constants';


const Works = () => {
  return (
    <div className="container mx-auto px-4 py-12 ">
      <h2 className="text-4xl font-bold mb-10 text-center">My Works</h2>
      <MagicContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            id={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </MagicContainer>
    </div>
  );
}

export default Works;

