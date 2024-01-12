import "./MyProjects.css";
import Project from "../components/Project";
import { v4 as uuidv4 } from "uuid";

const MyProjects = () => {
  const projectsData = [
    {
      name: "emTRUCK",
      image: "https://picsum.photos/id/8/400/400",
      bio: "Logbook web app for truck drivers of a private company (password: em23)",
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
      github: "",
      website: "https://emtruck.net/",
    },
    {
      name: "Tátova Pila",
      image: "https://picsum.photos/id/20/400/400",
      bio: "Website for woodworking private company",
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
      github: "",
      website: "https://tatovapila.cz/",
    },
    {
      name: "Oktagon Schedule",
      image: "https://picsum.photos/id/26/400/400",
      bio: "Schedule of previous and upcoming Oktagon MMA events",
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
      github: "",
      website: "",
    },
    {
      name: "Beneeto-Hours",
      image: "https://picsum.photos/id/85/400/400",
      bio: "Working hours time keeping web app",
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
      github: "",
      website: "https://beneeto-hours.netlify.app",
    },
  ];

  return (
    <div className="wrapper my-projects">
      <div className="my-projects-heading">Explore my&nbsp;projects</div>
      <Project key={uuidv4()} projectData={projectsData[0]} position={"left"} />
      <Project
        key={uuidv4()}
        projectData={projectsData[1]}
        position={"right"}
      />
      <Project key={uuidv4()} projectData={projectsData[2]} position={"left"} />
    </div>
  );
};

export default MyProjects;
