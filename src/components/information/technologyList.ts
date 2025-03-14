export type TechnologyType =
  | "all"
  | "frontend"
  | "framework"
  | "backend"
  | "design"
  | "language";

export interface TechnologyCardProps {
  name: string;
  imgSrc: string;
  proficiency: number;
  type: TechnologyType;
}

export const technologyList: TechnologyCardProps[] = [
  {
    name: "Typescript",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "language",
  },
  {
    name: "Javascript",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "language",
  },
  {
    name: "Java",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "language",
  },
  {
    name: "Python",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "language",
  },
  {
    name: "HTML",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "language",
  },
  {
    name: "CSS",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "language",
  },
  {
    name: "React",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "frontend",
  },
  {
    name: "NodeJS",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "backend",
  },
  {
    name: "Tailwind",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "framework",
  },
  {
    name: "Bootstrap",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "framework",
  },
  {
    name: "Chakra",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "framework",
  },
  {
    name: "Vite",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "framework",
  },
  {
    name: "Canva",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "design",
  },
  {
    name: "Figma",
    imgSrc: "src/assets/sillycat.jpg",
    proficiency: 3,
    type: "design",
  },
];
