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
      "Handled a diverse range of responsibilities that includes setting up and managing stalls,preparing engagement materials, assisting with calling campaigns, and providing usheringservices during graduations. Leveraged communication skills in order to provide essential information to more than 300 students during stalls regarding current activations and events. Engaged with 80-120 students over the phone per day during calling campaigns to communicate important information and gather data.",
    duration: "2024 - Present",
  },
  {
    experienceType: "work",
    position: "Student Ambassador",
    company: "Faculty of Science and Engineering MQ",
    companyLogo: "src/assets/icons/mqu_logo.png",
    location: "Sydney, Australia ",
    description:
      "Conducted campus tours for incoming Science and Engineering students around faculty related facilities. Provided wayfinding assistance, ensuring that event attendees were able to navigate the event area effectively. Supported the setup, execution, and packdown of campus events, contributing to a positive student experience",
    duration: "2025 - Present",
  },
  {
    experienceType: "work",
    position: "Secretary",
    company: "Filipino Students Society MQ",
    companyLogo: "src/assets/icons/fssmqu_logo.png",
    location: "Sydney, Australia ",
    description:
      "Enhnced membership experience by streamlining interaction processes with the society. ",
    duration: "2025 - Present",
    positions: [
      {
        position: "Director of Events",
        description:
          "Directed and executed 4 small scale events with approximately 50 participants each, while managing tight deadlines and multitasking under pressure. Demonstrated strong project management skills through organising logistics, delegating tasks, and ensuring smooth operations during events. Led multiple team meetings and contributed valuable insight that aided in strategic decision-making. Improved team productivity by implementing event planning protocols and processes",
        duration: "2024 - 2025",
      },
      {
        position: "General Officer",
        description:
          "Collaborated in organizing and setting up events, contributing to event success and satisfying membership experience. Assisted with tasks including email management, social media sponsorship promotions, and general support.",
        duration: "2023 - 2024",
      },
    ],
  },
];
