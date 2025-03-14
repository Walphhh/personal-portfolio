import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import { useRef, useState, useEffect } from "react";
import { Button } from "./button";

const Layout = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isDark, setIsDark] = useState("light");
  const prevScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <Navbar
        className={`fixed z-100 transition-transform duration-300 ${
          isHidden ? "translate-y-0" : "-translate-y-full"
        }`}
      />
      <Outlet />
    </div>
  );
};

export default Layout;
