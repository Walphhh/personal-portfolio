import { TagTypes } from "./projectsList";

type experienceType = "work" | "study;";

interface Positions {
  position: string;
  description: string;
  duration: string;
}
export interface ExperienceCard {
  experienceType: experienceType;
  position: string;
  company: string;
  companyLogo: string;
  location: string;
  description: string;
  duration: string;
  tags: TagTypes[];
  positions?: Positions[];
}

export const experience: ExperienceCard[] = [
  {
    experienceType: "work",
    position: "Student Belong Activator",
    company: "Macquarie University",
    companyLogo: "src/assets/icons/mqu_logo.png",
    location: "Sydney, Australia ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    duration: "2024 - Present",
    tags: [],
  },
  {
    experienceType: "work",
    position: "Student Ambassador",
    company: "Faculty of Science and Engineering MQ",
    companyLogo: "src/assets/icons/mqu_logo.png",
    location: "Sydney, Australia ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    duration: "2025 - Present",
    tags: [],
  },
  {
    experienceType: "work",
    position: "Secretary",
    company: "Filipino Students Society MQ",
    companyLogo: "src/assets/icons/mqu_logo.png",
    location: "Sydney, Australia ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    duration: "2025 - Present",
    tags: [],
    positions: [
      {
        position: "Director of Events",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        duration: "2024 - 2025",
      },
      {
        position: "General Officer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        duration: "2023 - 2024",
      },
    ],
  },
];
