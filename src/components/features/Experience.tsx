import Fullscreen from "../ui/Fullscreen";
import ExperienceCard from "../ui/ExperienceCard";
import { experience } from "@/components/information/experienceList";

const Experience = () => {
  return (
    <Fullscreen id="experience-section" className="p-5 flex justify-center">
      <div className="space-y-10">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold underline dropShadow">
            My Experience
          </h1>
        </div>
        <div className="flex">
          <div className="flex-col">
            <div className="relative left-4 pt- h-full w-1 z-0 bg-fontDefault rounded-b-lg" />
          </div>
          <div className=" space-y-5 z-10">
            {experience.map((experience) => {
              return (
                <ExperienceCard key={experience.position} {...experience} />
              );
            })}
          </div>
        </div>
      </div>
    </Fullscreen>
  );
};

export default Experience;
