import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  liveUrl?: string;
  githubUrl?: string;
  tags?: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card className="max-w-80">
      <div className="card-img-container relative overflow-hidden">
        <img
          src={props.imgSrc}
          alt="project_photo"
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex">
        {props.liveUrl && <Button>Live Demo</Button>}
        <Button>More Details</Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
