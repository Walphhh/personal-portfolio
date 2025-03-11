import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="flex h-16 bg-amber-200 items-center ">
      <nav className="w-full">
        <ul className="flex justify-between">
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
          <li>Item Four</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
