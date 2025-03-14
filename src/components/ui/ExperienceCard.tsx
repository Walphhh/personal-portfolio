import { Separator } from "./separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { ExperienceCard as ExperienceCardInterface } from "@/components/information/experienceList";
import { Briefcase } from "lucide-react";

const ExperienceCard = (props: ExperienceCardInterface) => {
  const previousPositions = props.positions;
  return (
    <div className="flex space-x-10 ">
      <div className="h-7 w-7 p-1 rounded-full border border-fontDefault bg-fontDefault flex items-center justify-center">
        <Briefcase className="h-10 w-10 stroke-background-0 " />
      </div>
      <Card className="bg-background-1 max-w-250 p5 outline-outline shadow-md">
        <CardHeader>
          <div className="flex justify-between">
            <div className="flex space-x-5">
              <div className="company-logo">
                <img
                  src={props.companyLogo || "srcassetssillycat.jpg"}
                  alt="placeholder"
                  className="w-15 h-15"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <CardTitle className="text-xl">{props.position}</CardTitle>
                </div>
                <div className="flex space-x-2">
                  <div>{props.company}</div>
                  <Separator
                    orientation="vertical"
                    className="min-w-0.5  bg-gray-700"
                  />
                  <div>{props.location}</div>
                </div>
              </div>
            </div>

            <div className="duration">
              <h1>{props.duration}</h1>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{props.description}</CardDescription>
        </CardContent>
        {previousPositions &&
          previousPositions.map((position) => {
            return (
              <div className="p-5 ms-10 space-y-1">
                <div className="flex justify-between">
                  <CardTitle>{position.position}</CardTitle>
                  <h1>{position.duration}</h1>
                </div>
                <CardDescription>{position.description}</CardDescription>
              </div>
            );
          })}
        <CardFooter>Footer Here</CardFooter>
      </Card>
    </div>
  );
};

export default ExperienceCard;
