import { Outlet } from "react-router-dom";
import Navbar from "../features/Navbar";
import { useRef, useState, useEffect } from "react";
import { Button } from "./button";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
