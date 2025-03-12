export type TagTypes =
  | "Placeholder"
  | "Next.js"
  | "React"
  | "Node.js"
  | "Bootstrap"
  | "ChakraUI"
  | "Express";

export interface ProjectCard {
  title: string;
  description: string;
  imgSrc: string;
  tags: TagTypes[];
  liveUrl?: string;
  githubUrl?: string;
}
export const projects: ProjectCard[] = [
  {
    title: "Blogging Website",
    description:
      "A full-stack blogging website built with React + ChakraUI for the frontend and Node.js + Express for the backend. Features jwt for user authentication",
    imgSrc: "src/assets/sillycat.jpg",
    tags: ["React", "ChakraUI", "Node.js", "Express"],
    liveUrl: "https://link/to/project",
    githubUrl: "https://link/to/github",
  },
  {
    title: "Genshin Character viewer",
    description:
      "A viewer for Genshin Impact characters released until mid 2024.",
    imgSrc: "src/assets/sillycat.jpg",
    tags: ["React", "Bootstrap"],
  },
  {
    title: "Christmas Card",
    description: "Sharing the holiday spirit with an online card :3",
    imgSrc: "src/assets/sillycat.jpg",
    tags: ["React"],
  },
  {
    title: "some title for ANOTHER project",
    description: "some desription about ANOTHER project",
    imgSrc: "src/assets/sillycat.jpg",
    tags: ["Placeholder"],
  },
  {
    title: "some title for ANOTHER project",
    description: "some desription about ANOTHER project",
    imgSrc: "src/assets/sillycat.jpg",
    tags: ["Placeholder"],
  },
  {
    title: "some title for ANOTHER project",
    description: "some desription about ANOTHER project",
    imgSrc: "src/assets/sillycat.jpg",
    tags: ["Placeholder"],
  },
];
