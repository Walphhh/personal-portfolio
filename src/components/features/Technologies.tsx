import Fullscreen from "../ui/Fullscreen";
import React, { useState } from "react";
import TechnologyCard from "../ui/TechnologyCard";
import { technologyList } from "../information/technologyList";
import { Button } from "../ui/button";

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
    <div className="flex justify-center">
      <div className="space-y-10 flex flex-col items-center">
        <h1 className="text-4xl font-semibold underline drop-shadow-md">
          Technologies I've Worked With
        </h1>
        <div className="flex space-x-5 p-3 bg-background-1 rounded-xl shadow-md">
          {technologyTypes.map((name) => {
            return (
              <button
                onClick={() => handleHighlight(name)}
                id="name"
                className={`hover:cursor-pointer p-2 px-4 rounded-xl drop-shadow-md ${
                  highlited === name && `bg-optionHighlight`
                }`}
              >
                <h1 className="font-semibold">{name}</h1>
              </button>
            );
          })}
        </div>
        <div className=" max-w-4xl p-5 bg-background-1 rounded-xl shadow-md">
          <div className="grid grid-cols-5 gap-5">
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
    </div>
  );
};

export default Technologies;
