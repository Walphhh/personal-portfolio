import Experience from "../features/Experience";
import Hero from "../features/Hero";
import Projects from "../features/Projects";
import Technologies from "../features/Technologies";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Technologies />
      <Experience />
      <Projects />
    </>
  );
};

export default Homepage;
