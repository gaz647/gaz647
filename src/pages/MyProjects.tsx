import "./MyProjects.css";
import Project from "../components/Project";
import { v4 as uuidv4 } from "uuid";
import { siteData_en } from "../assets/siteData";

const MyProjects = () => {
  return (
    <div className="wrapper my-projects">
      <div className="my-projects-heading">
        {siteData_en.myProjects.heading}
      </div>
      {siteData_en.myProjects.projectsData.map((oneProject) => {
        return <Project key={uuidv4()} projectData={oneProject} />;
      })}
    </div>
  );
};

export default MyProjects;
