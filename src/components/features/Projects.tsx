import React from "react";
import Fullscreen from "../ui/Fullscreen";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/components/information/projectsList";

const Projects = () => {
  return (
    <Fullscreen id="projects-section" className="p-8 space-y-10 px-8 lg:px-48 ">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold underline dropShadow">My Projects</h1>
      </div>
      <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          return <ProjectCard key={project.title} {...project} />;
        })}
      </div>
    </Fullscreen>
  );
};

export default Projects;
