import React from "react";
import Fullscreen from "../ui/Fullscreen";
import ExperienceCard from "../ui/ExperienceCard";
import { ExperienceCard as ExperienceCardInterface } from "@/components/information/experience";
import { experience } from "@/components/information/experience";

const Experience = () => {
  return (
    <Fullscreen className="p-5 flex justify-center">
      <div className="space-y-5">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">My Experience</h1>
        </div>
        <div className="flex">
          <div className="flex-col">
            <div className="relative left-3 pt- h-full w-1 z-0 bg-gray-300 rounded-b-lg" />
          </div>
          <div className="space-y-5 z-10">
            {experience.map((experience) => {
              return <ExperienceCard {...experience} />;
            })}
          </div>
        </div>
      </div>
    </Fullscreen>
  );
};

export default Experience;
