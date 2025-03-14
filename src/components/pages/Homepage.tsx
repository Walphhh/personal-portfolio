import { useTheme } from "../contexts/ThemeContext";
import Experience from "../features/Experience";
import Hero from "../features/Hero";
import Projects from "../features/Projects";
import Technologies from "../features/Technologies";
import ThemeToggle from "../features/ThemeToggle";

const Homepage = () => {
  const { theme } = useTheme();
  return (
    <>
      <Hero />
      <img
        src="src/assets/decoration/Bee Trail 1.png"
        alt="Bee_Trail_1"
        className={`sm:hidden xl:relative xl:-top-[400px] xl:block ${
          theme && `set-white`
        }`}
      />
      <div className="relative z-10 xl:-mt-125">
        <Technologies />
      </div>
      <img
        src="src/assets/decoration/Bee Trail 2.png"
        alt="Bee_Trail_2"
        className={`z-1 sm:hidden xl:relative xl:-top-[815px] xl:block ${
          theme && `set-white`
        }`}
      />
      <div className="xl:-mt-248">
        <Experience />
      </div>
      <Projects />
    </>
  );
};

export default Homepage;
