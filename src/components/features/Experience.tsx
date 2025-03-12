import React from "react";
import Fullscreen from "../ui/Fullscreen";
import ExperienceCard from "../ui/ExperienceCard";
import { ExperienceCard as ExperienceCardInterface } from "@/experience";
import { experience } from "@/experience";

const Experience = () => {
  return (
    <Fullscreen className="p-5 flex justify-center">
      <div className="space-y-5">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">My Experience</h1>
        </div>
        {experience.map((experience) => {
          return <ExperienceCard {...experience} />;
        })}
      </div>
    </Fullscreen>
  );
};

export default Experience;
