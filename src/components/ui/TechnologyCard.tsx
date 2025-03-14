import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { TechnologyCardProps } from "../information/technologyList";

const TechnologyCard = (props: TechnologyCardProps) => {
  return (
    <Card className="h-40 w-40">
      <CardHeader className="inline-block mx-auto">
        <img
          src={props.imgSrc}
          alt={`${props.name}_icon`}
          className="max-h-20"
        />
      </CardHeader>
      <CardFooter className="inline-block mx-auto">
        <h1>{props.name}</h1>
      </CardFooter>
    </Card>
  );
};

export default TechnologyCard;
