import { ProjectCard as ProjectCardProps } from "@/components/information/projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { ExternalLink, Github } from "lucide-react";
import DisplayTags from "../features/DisplayTags";

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card className="flex flex-col pt-0 overflow-hidden border border-border hover:border-primary/50 hover:shadow-md">
      <div className="card-img-container relative overflow-hidden h-80">
        <img
          src={props.imgSrc}
          alt="project_photo"
          className="object-cover w-full"
        />
      </div>
      <CardHeader className="flex-grow">
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <DisplayTags tags={props.tags} />
      </CardContent>
      <CardFooter className="flex space-x-1">
        {props.liveUrl && (
          <a href={props.liveUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="hover:cursor-pointer">
              <ExternalLink />
              Live Demo
            </Button>
          </a>
        )}
        {props.githubUrl && (
          <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="hover:cursor-pointer">
              <Github />
              Github
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
