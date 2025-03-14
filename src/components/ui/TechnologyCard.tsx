import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { TechnologyCardProps } from "../information/technologyList";

const TechnologyCard = (props: TechnologyCardProps) => {
  return (
    <Card className="h-30 w-30">
      <div className="inline-block mx-auto">
        <div>{props.icon ? <props.icon size={40} /> : props.name}</div>
      </div>
      <div className="inline-block mx-auto">
        <h1 className="font-semibold">{props.name}</h1>
      </div>
    </Card>
  );
};

export default TechnologyCard;
