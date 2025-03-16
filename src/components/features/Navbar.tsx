import ThemeToggle from "./ThemeToggle";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [showing, setShowing] = useState(true);
  const prevScrollY = useRef<number>(0);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  // Handles Disappear on Scroll Down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setShowing(false);
      } else {
        setShowing(true);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handles when mouse hovers over the Navbar area
  // useEffect(() => {
  //   const navbar = navbarRef.current;

  //   if (navbar) {
  //     const handleEnter = () => {
  //       console.log("mouse entered navbar area");
  //       setShowing(false);
  //     };

  //     const handleLeave = () => {
  //       console.log("mouse left navbar area");
  //       setShowing(true);
  //     };

  //     navbar.addEventListener("mouseenter", handleEnter);
  //     navbar.addEventListener("mouseleave", handleLeave);

  //     return () => {
  //       navbar.removeEventListener("mouseenter", handleEnter);
  //       navbar.removeEventListener("mouseleave", handleLeave);
  //     };
  //   }
  // });

  // Handles Scrolling to a Section
  const scrollTo = (sectionID: string) => {
    const section = document.getElementById(sectionID);

    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={navbarRef}
        className={`w-dvw flex h-16 px-20 bg-optionHighlight items-center fixed z-100 transition-transform duration-300 ${
          showing ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="w-full">
          <ul className="flex space-x-24 items-center justify-end text-l font-semibold text-fontHighlight">
            <li>
              <button
                onClick={() => scrollTo("technologies-section")}
                className="hover:underline hover:cursor-pointer"
              >
                Technologies
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("experience-section")}
                className="hover:underline hover:cursor-pointer"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("projects-section")}
                className="hover:underline hover:cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
