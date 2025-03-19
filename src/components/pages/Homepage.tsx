import { useTheme } from "../contexts/ThemeContext";
import Experience from "../features/Experience";
import Hero from "../features/Hero";
import Projects from "../features/Projects";
import Technologies from "../features/Technologies";
import BeeTrail1 from "../../assets/decoration/Bee Trail 1.png";
import BeeTrail2 from "../../assets/decoration/Bee Trail 2.png";

const Homepage = () => {
  const { theme } = useTheme();
  return (
    <>
      <Hero />
      <img
        src={BeeTrail1}
        alt="Bee_Trail_1"
        className={`hidden 2xl:relative 2xl:-top-[400px] 2xl:block ${
          theme && `set-white`
        }`}
      />
      <div className="relative z-10 2xl:-mt-125">
        <Technologies />
      </div>
      <img
        src={BeeTrail2}
        alt="Bee_Trail_2"
        className={`z-1 hidden 2xl:relative 2xl:-top-[920px] 2xl:block ${
          theme && `set-white`
        }`}
      />
      <div className="2xl:-mt-278">
        <Experience />
      </div>
      <Projects />
    </>
  );
};

export default Homepage;
