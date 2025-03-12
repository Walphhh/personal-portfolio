import Hello from "./Hello";
import Fullscreen from "../ui/Fullscreen";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <>
      <Fullscreen className="bg-amber-50 p-5 flex items-center justify-center space-x-10">
        <div className="space-y-10">
          <div>
            <h1 className="text-2xl flex">
              <div className="text-2xl min-w-40">
                <Hello />
              </div>
              I'm Ralph
            </h1>
            <h1 className="text-6xl font-semibold">I'm a full-stack dev :3</h1>
          </div>
          <div className="flex items-center space-x-5">
            <Button className="hover:cursor-pointer">Download CV</Button>
            <a href="">
              <img
                src="src/assets/github.svg"
                alt="github_icon"
                className="size-12 hover:opacity-80"
              />
            </a>
            <a href="">
              <img
                src="src/assets/linkedin.svg"
                alt="linkedin_icon"
                className="size-15 hover:opacity-80"
              />
            </a>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="min-h-50 min-w-1 flex bg-gray-700"
        />

        <Avatar className="w-50 h-50">
          <AvatarImage src="src\assets\sillycat.jpg" />
          <AvatarFallback>CAT</AvatarFallback>
        </Avatar>
      </Fullscreen>
    </>
  );
};

export default Hero;
