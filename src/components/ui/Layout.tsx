import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Homepage from "../pages/Homepage";
import Projects from "../pages/Projects";

const Layout = () => {
  return (
    <div className="m">
      <Navbar />
      <Outlet />
      <Homepage />
      <Projects />
    </div>
  );
};

export default Layout;
