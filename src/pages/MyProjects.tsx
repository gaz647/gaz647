import "./MyProjects.css";
import Project from "../components/Project";

const MyProjects = () => {
  const projectsData = [
    {
      name: "emTRUCK",
      image: "url",
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
    },
    {
      name: "Tátova Pila",
      image: "url",
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
    },
    {
      name: "Oktagon Schedule",
      image: "url",
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
    },
  ];

  return (
    <div className="wrapper my-projects">
      <h1>My projects biatch</h1>
      {projectsData.map((oneProject) => {
        return <Project key={oneProject.name} projectData={oneProject} />;
      })}
    </div>
  );
};

export default MyProjects;
