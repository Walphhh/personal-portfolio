import BloggingWebsite from "../../assets/project snapshots/blogsite_snapshot.png";
import GenshinViewer from "../../assets/project snapshots/genshinviewer_snapshot.png";
import Portfolio from "../../assets/project snapshots/portfolio_snapshot.png";
import ChristmasCard from "../../assets/project snapshots/christmas_card_snapshot.png";

export type TagTypes =
  | "Placeholder"
  | "Next.js"
  | "React"
  | "Node.js"
  | "Bootstrap"
  | "ChakraUI"
  | "Express"
  | "Typescript"
  | "Tailwind";

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
      "A full-stack blogging website built with React+ChakraUI for the frontend and Node.js+Express for the backend. Deployed to Vercel for the serverless API and Github Pages for the Client",
    imgSrc: BloggingWebsite,
    tags: ["React", "ChakraUI", "Node.js", "Express"],
    liveUrl: "https://walphhh.github.io/personal-blog/",
    githubUrl: "https://github.com/Walphhh/personal-blog",
  },
  {
    title: "Genshin Character viewer",
    description:
      "A viewer for Genshin Impact characters released until mid 2024.",
    imgSrc: GenshinViewer,
    tags: ["React", "Bootstrap"],
    liveUrl: "https://walphhh.github.io/Genshin-Encylopedia/",
    githubUrl: "https://github.com/Walphhh/Genshin-Encylopedia",
  },
  {
    title: "Portfolio Website",
    description: "A website showcasing my portfolio",
    imgSrc: Portfolio,
    tags: ["React", "Typescript", "Tailwind"],
    githubUrl: "",
  },
  {
    title: "Christmas Card",
    description: "Sharing the holiday spirit with an online card :3",
    imgSrc: ChristmasCard,
    tags: ["React"],
    liveUrl: "https://walphhh.github.io/for-friends/",
    githubUrl: "https://github.com/Walphhh/for-friends",
  },
];
