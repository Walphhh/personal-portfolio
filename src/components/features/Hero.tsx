import Hello from "./Hello";
import Fullscreen from "../ui/Fullscreen";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useTheme } from "../contexts/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <>
      <Fullscreen
        id="hero-section"
        className="font-Figtree relative z-9 p-5 flex items-center justify-center"
      >
        <div className="flex space-x-5">
          <div
            className={`scribble-container flex flex-col space-y-55 ${
              theme && "set-yellow"
            }`}
          >
            <img
              src="src/assets/decoration\scribble.png"
              alt="scribble"
              className="h-30 drop-shadow-lg"
            />
            <img
              src="src/assets/decoration\scribble.png"
              alt="scribble"
              className="h-30 -rotate-90 drop-shadow-lg"
            />
          </div>
          <div className="flex items-center">
            <div className="flex space-x-10">
              <div className="space-y-10">
                <div>
                  <h1 className="text-2xl flex font-semibold drop-shadow-lg">
                    <div className="text-2xl min-w-40 ">
                      <Hello />
                    </div>
                    I'm Ralph
                  </h1>
                  <h1 className="text-6xl font-bold drop-shadow-lg">
                    I'm a full-stack dev :3
                  </h1>
                </div>
                <div className="flex items-center space-x-5 drop-shadow-lg">
                  <Button className="hover:cursor-pointer ">Download CV</Button>

                  <a href="">
                    <img
                      src="src/assets/icons/github.svg"
                      alt="github_icon"
                      className={`size-12 hover:opacity-80 ${
                        theme && `set-white`
                      }`}
                    />
                  </a>
                  <a href="">
                    <img
                      src="src/assets/icons/linkedin.svg"
                      alt="linkedin_icon"
                      className={`size-15 hover:opacity-80 ${
                        theme && `set-white`
                      }`}
                    />
                  </a>
                </div>
              </div>
              <Separator
                orientation="vertical"
                className="min-h-60 min-w-1 flex bg-fontDefault drop-shadow-lg hide-on-small"
              />

              <Avatar className="w-50 h-50 drop-shadow-lg hide-on-small">
                <AvatarImage src="src\assets\sillycat.jpg" />
                <AvatarFallback>CAT</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div
            className={`scribble-container flex flex-col space-y-55 ${
              theme && "set-yellow"
            }`}
          >
            <img
              src="src/assets/decoration/scribble.png"
              alt="scribble"
              className="h-30 rotate-90 drop-shadow-lg"
            />
            <img
              src="src/assets/decoration/scribble.png"
              alt="scribble"
              className="h-30 rotate-180 drop-shadow-lg"
            />
          </div>
        </div>
      </Fullscreen>
    </>
  );
};

export default Hero;
