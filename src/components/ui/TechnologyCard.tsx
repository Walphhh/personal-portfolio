import React, { useEffect, useState } from "react";
import { Card } from "./card";
import { TechnologyCardProps } from "../information/technologyList";
import { proficiencyBg } from "../information/technologyList";

const TechnologyCard = (props: TechnologyCardProps) => {
  const [background, setBackground] = useState<string>();

  useEffect(() => {
    const background = proficiencyBg.find(
      (item) => item.key === props.proficiency
    );

    setBackground(background?.bg);
  });

  return (
    <Card className={`h-30 w-30 ${background} `}>
      <div className="inline-block mx-auto">
        <div>
          {props.icon ? (
            <props.icon size={40} className="fill-[#242424]" />
          ) : (
            props.name
          )}
        </div>
      </div>
      <div className="inline-block mx-auto">
        <h1 className="font-semibold text-[#242424]">{props.name}</h1>
      </div>
    </Card>
  );
};

export default TechnologyCard;
