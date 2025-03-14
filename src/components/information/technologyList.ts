import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiBookbub,
  SiChakraui,
  SiVite,
  SiCanva,
  SiFigma,
} from "react-icons/si";
import { FaBootstrap, FaJava } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export type TechnologyType =
  | "all"
  | "frontend"
  | "framework"
  | "backend"
  | "design"
  | "language";

export interface TechnologyCardProps {
  name: string;
  icon: IconType;
  proficiency: number;
  type: TechnologyType;
}

export const technologyList: TechnologyCardProps[] = [
  {
    name: "Typescript",
    icon: SiTypescript,
    proficiency: 3,
    type: "language",
  },
  {
    name: "Javascript",
    icon: SiJavascript,
    proficiency: 3,
    type: "language",
  },
  {
    name: "Java",
    icon: FaJava,
    proficiency: 3,
    type: "language",
  },
  {
    name: "Python",
    icon: SiPython,
    proficiency: 3,
    type: "language",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    proficiency: 3,
    type: "language",
  },
  {
    name: "CSS",
    icon: SiCss3,
    proficiency: 3,
    type: "language",
  },
  {
    name: "React",
    icon: SiReact,
    proficiency: 3,
    type: "frontend",
  },
  {
    name: "NodeJS",
    icon: SiNodedotjs,
    proficiency: 3,
    type: "backend",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    proficiency: 3,
    type: "framework",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    proficiency: 3,
    type: "framework",
  },
  {
    name: "Chakra",
    icon: SiChakraui,
    proficiency: 3,
    type: "framework",
  },
  {
    name: "Vite",
    icon: SiVite,
    proficiency: 3,
    type: "framework",
  },
  {
    name: "Canva",
    icon: SiCanva,
    proficiency: 3,
    type: "design",
  },
  {
    name: "Figma",
    icon: SiFigma,
    proficiency: 3,
    type: "design",
  },
];
