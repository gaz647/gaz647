import "./MyProjects.css";
import Project from "../components/Project";
import { v4 as uuidv4 } from "uuid";

const MyProjects = ({ language }: { language: string }) => {
  const projectsData = [
    {
      name: "emTRUCK",
      image: "https://picsum.photos/id/8/400/400",
      bio_en:
        "Logbook web app for truck drivers of a private company (demo account: email: test@gmail.com, password: em24).",
      bio_cs:
        "Kniha jízd pro řidiče soukromé společnosti (demo účet: email: test@gmail.com, password: em24).",
      website: "https://emtruck.net/",
      github: "",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/1a883016-572f-4180-8581-73d1b8c50428.svg",
      stack: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Vite",
        "React Router",
        "Redux Toolkit",
        "Firebase",
        "Axios",
        "Exchange Rate API",
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Vite",
        "React Router",
        "Redux Toolkit",
        "Firebase",
        "Axios",
        "Exchange Rate API",
      ],
      position: "left",
    },
    {
      name: "Tátova Pila",
      image: "https://picsum.photos/id/20/400/400",
      bio_en: "Website for woodworking private company.",
      bio_cs: "Webová stránka pro pilařskou firmu.",
      website: "https://tatovapila.cz/",
      github: "",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/018c1b57-9fb4-4879-8e56-75f570716b1f.svg",
      stack: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Vite",
        "React Router",
        "Google Maps",
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Vite",
        "React Router",
        "Google Maps",
      ],
      position: "right",
    },
    {
      name: "Beneeto-Hours",
      image: "https://picsum.photos/id/85/400/400",
      bio_en: "Working hours time keeping web app.",
      bio_cs: "Webová aplikace pro evidenci pracovních hodin.",
      website: "https://beneeto-hours.netlify.app",
      github: "",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/bf2c22ad-f6b8-4f77-b86d-e9a72a65905b.svg",
      stack: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Vite",
        "Redux Toolkit",
        "Moment.js",
        "localStorage",
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Vite",
        "Redux Toolkit",
        "Moment.js",
        "localStorage",
      ],
      position: "left",
    },
    {
      name: "Oktagon Schedule",
      image: "https://picsum.photos/id/26/400/400",
      bio_en: "Schedule of previous and upcoming Oktagon MMA events.",
      bio_cs:
        "Kalendář předchozích a nadcházejících galavečerů organizace Oktagon MMA.",
      website: "",
      github: "",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/124c0e6a-9248-4c01-bf48-1c49b325afe3.svg",
      stack: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Vite",
        "Firebase",
        "date-fns",
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Vite",
        "Firebase",
        "date-fns",
      ],
      position: "right",
    },
  ];

  console.log();

  return (
    <div className="my-projects">
      <div className="my-projects-heading">
        {language === "en"
          ? "Explore my projects"
          : "Prohlédněte si mé projekty"}
      </div>
      {projectsData.map((oneProject) => {
        return (
          <Project
            key={uuidv4()}
            projectData={oneProject}
            language={language}
          />
        );
      })}
    </div>
  );
};

export default MyProjects;
