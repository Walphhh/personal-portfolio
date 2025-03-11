import Hello from "../features/Hello";
import Fullscreen from "../ui/Fullscreen";
import React from "react";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Homepage = () => {
  return (
    <>
      <Fullscreen className="bg-blue-600 flex items-center justify-center space-x-10">
        <div className="m-2 space-y-5 mr-10">
          <div className="">
            <h1 className="text-2xl flex">
              <div className="text-2xl min-w-40">
                <Hello />
              </div>{" "}
              I'm Ralph
            </h1>
            <h1 className="text-6xl">I'm a full-stack dev :3</h1>
          </div>
        </div>

        <Separator orientation="vertical" className="min-h-40 min-w-0.5" />

        <Avatar className="w-50 h-50">
          <AvatarImage src="src\assets\sillycat.jpg" />
          <AvatarFallback>CAT</AvatarFallback>
        </Avatar>
      </Fullscreen>
    </>
  );
};

export default Homepage;
