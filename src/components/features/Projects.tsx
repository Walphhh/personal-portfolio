import React from "react";
import Fullscreen from "../ui/Fullscreen";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/projects";

const Projects = () => {
  const projectsList = projects;

  return (
    <Fullscreen className="p-8 space-y-10 px-8 lg:px-48 ">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">My Projects</h1>
      </div>
      <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </div>
    </Fullscreen>
  );
};

export default Projects;
