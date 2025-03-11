import React from "react";
import Fullscreen from "../ui/Fullscreen";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const sampleProject = {
    title: "some title",
    description: "some desription about this project",
    imgSrc: "src/assets/sillycat.jpg",
  };
  return (
    <Fullscreen>
      <div className="container">
        <ProjectCard {...sampleProject} />
      </div>
    </Fullscreen>
  );
};

export default Projects;
