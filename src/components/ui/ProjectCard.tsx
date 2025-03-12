import { ProjectCard as ProjectCardProps } from "@/projects";
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
        {/* <div className="flex space-x-1">
          {props.tags.map((tag) => {
            return <Badge variant={"secondary"}>{tag}</Badge>;
          })}
        </div> */}
        <DisplayTags tags={props.tags} />
      </CardContent>
      <CardFooter className="flex space-x-1">
        <Button className="hover:cursor-pointer">More Details</Button>
        {props.liveUrl && (
          <Button variant="outline" className="hover:cursor-pointer">
            <ExternalLink />
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </Button>
        )}
        {props.githubUrl && (
          <Button variant="outline" className="hover:cursor-pointer">
            <Github />
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
