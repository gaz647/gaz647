import "./MyProjects.css";
import Project from "../components/Project";
import { v4 as uuidv4 } from "uuid";

const MyProjects = () => {
  const projectsData = [
    {
      name: "emTRUCK",
      image: "https://picsum.photos/id/8/400/400",
      bio: "Logbook web app for truck drivers of a private company (password: em23)",
      website: "https://emtruck.net/",
      github: "",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/1a883016-572f-4180-8581-73d1b8c50428.svg",
      stack: [
        "HTML",
        "CSS",
        "JS",
        "React Router",
        "Redux Toolkit",
        "Firebase",
        "HTML",
        "CSS",
        "JS",
        "React Router",
        "Redux Toolkit",
        "Firebase",
      ],
      position: "left",
    },
    {
      name: "Tátova Pila",
      image: "https://picsum.photos/id/20/400/400",
      bio: "Website for woodworking private company",
      website: "https://tatovapila.cz/",
      github: "",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/018c1b57-9fb4-4879-8e56-75f570716b1f.svg",
      stack: [
        "HTML",
        "CSS",
        "JS",
        "React Router",
        "Redux Toolkit",
        "Firebase",
        "HTML",
        "CSS",
        "JS",
        "React Router",
        "Redux Toolkit",
        "Firebase",
      ],
      position: "right",
    },
    {
      name: "Beneeto-Hours",
      image: "https://picsum.photos/id/85/400/400",
      bio: "Working hours time keeping web app",
      website: "https://beneeto-hours.netlify.app",
      github: "",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/bf2c22ad-f6b8-4f77-b86d-e9a72a65905b.svg",
      stack: [
        "HTML",
        "CSS",
        "JS",
        "React Router",
        "Redux Toolkit",
        "Firebase",
        "HTML",
        "CSS",
        "JS",
        "React Router",
        "Redux Toolkit",
        "Firebase",
      ],
      position: "right",
    },
    {
      name: "Oktagon Schedule",
      image: "https://picsum.photos/id/26/400/400",
      bio: "Schedule of previous and upcoming Oktagon MMA events",
      website: "",
      github: "",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/124c0e6a-9248-4c01-bf48-1c49b325afe3.svg",
      stack: [
        "HTML",
        "CSS",
        "JS",
        "React Router",
        "Redux Toolkit",
        "Firebase",
        "HTML",
        "CSS",
        "JS",
        "React Router",
        "Redux Toolkit",
        "Firebase",
      ],
      position: "left",
    },
  ];

  return (
    <div className="wrapper my-projects">
      <div className="my-projects-heading">Explore my&nbsp;projects</div>
      {projectsData.map((oneProject) => {
        return <Project key={uuidv4()} projectData={oneProject} />;
      })}
    </div>
  );
};

export default MyProjects;
