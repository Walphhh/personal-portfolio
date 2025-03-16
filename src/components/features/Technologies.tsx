import Fullscreen from "../ui/Fullscreen";
import { useState } from "react";
import TechnologyCard from "../ui/TechnologyCard";
import { technologyList } from "../information/technologyList";
import { proficiencyBg } from "../information/technologyList";

const Technologies = () => {
  const [highlited, setHighlited] = useState("All");

  const technologyTypes = [
    "All",
    "Frontend",
    "Framework",
    "Backend",
    "Design",
    "Language",
  ];

  const handleHighlight = (technologyType: any) => {
    setHighlited(technologyType);
  };

  return (
    <Fullscreen
      id="technologies-section"
      className="flex min-h-180 justify-center p-5"
    >
      <div className="space-y-10 flex flex-col items-center">
        <h1 className="text-4xl font-semibold underline drop-shadow-md">
          Technologies I've Worked With
        </h1>

        <div className="flex p-3 bg-background-1 rounded-xl shadow-md">
          {technologyTypes.map((name) => {
            return (
              <button
                onClick={() => handleHighlight(name)}
                id="name"
                className={`hover:cursor-pointer p-2 px-4 rounded-xl drop-shadow-md ${
                  highlited === name &&
                  `bg-optionHighlight text-highlightDefault`
                }`}
              >
                <h1 className="font-semibold ">{name}</h1>
              </button>
            );
          })}
        </div>
        <div className="bg-background-1 flex p-5 shadow-md rounded-xl space-x-5 font-semibold">
          <h1>Comfort Level</h1>
          {proficiencyBg.map((item) => {
            return (
              <div className="flex items-center space-x-2 ">
                <div
                  className={`${item.bg} h-3 w-3 rounded-full shadow-md`}
                ></div>
                <h1>{item.key}</h1>
              </div>
            );
          })}
        </div>
        <div className=" max-w-6xl p-10 bg-background-1 border-[#E9E9E9] rounded-xl shadow-md">
          <div className="grid lg:grid-cols-4 gap-5 sm:grid-cols-3">
            {highlited === "All" ? (
              <>
                {technologyList.map((technology) => {
                  return <TechnologyCard {...technology} />;
                })}{" "}
              </>
            ) : (
              <>
                {technologyList
                  .filter((technology) => {
                    return highlited.toLowerCase() === technology.type;
                  })
                  .map((technology) => {
                    return <TechnologyCard {...technology} />;
                  })}{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </Fullscreen>
  );
};

export default Technologies;
