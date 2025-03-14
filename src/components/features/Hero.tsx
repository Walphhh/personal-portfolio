import Hello from "./Hello";
import Fullscreen from "../ui/Fullscreen";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <>
      <Fullscreen className="font-Figtree p-5 flex items-center justify-center ">
        <div className="scribble-container flex">
          <div className="flex flex-col space-y-55">
            <img
              src="src\assets\scribble.png"
              alt="scribble"
              className="h-30 dropShadow"
            />
            <img
              src="src\assets\scribble.png"
              alt="scribble"
              className="h-30 -rotate-90 dropShadow"
            />
          </div>
          <div className="flex items-center">
            <div className="flex space-x-10">
              <div className="space-y-10">
                <div>
                  <h1 className="text-2xl flex font-semibold dropShadow">
                    <div className="text-2xl min-w-40 ">
                      <Hello />
                    </div>
                    I'm Ralph
                  </h1>
                  <h1 className="text-6xl font-bold dropShadow">
                    I'm a full-stack dev :3
                  </h1>
                </div>
                <div className="flex items-center space-x-5 dropShadow">
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
                className="min-h-60 min-w-1 flex bg-fontDefault dropShadow"
              />

              <Avatar className="w-50 h-50 dropShadow">
                <AvatarImage src="src\assets\sillycat.jpg" />
                <AvatarFallback>CAT</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="scribble-container flex flex-col space-y-55">
            <img
              src="src\assets\scribble.png"
              alt="scribble"
              className="h-30 rotate-90 dropShadow"
            />
            <img
              src="src\assets\scribble.png"
              alt="scribble"
              className="h-30 rotate-180 dropShadow"
            />
          </div>
        </div>
      </Fullscreen>
    </>
  );
};

export default Hero;
