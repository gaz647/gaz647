import "./Project.css";
import { v4 as uuidv4 } from "uuid";
import { VscGithubInverted } from "react-icons/vsc";
import { FaExternalLinkAlt } from "react-icons/fa";

interface StackSliderProps {
  stack: string[];
}

const StackSlider: React.FC<StackSliderProps> = ({ stack }) => {
  return (
    <div className="slider-container">
      <div className="slider-slider">
        {stack.map((oneStack) => {
          return (
            <div className="one-stack" key={uuidv4()}>
              {oneStack}
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface ProjectProps {
  projectData: {
    name: string;
    image: string;
    bio: string;
    website: string;
    github: string;
    wakaTimeImage: string;
    stack: string[];
    position: string;
  };
}

const Project: React.FC<ProjectProps> = ({ projectData }) => {
  return (
    <div
      className={`project-container ${
        projectData.position === "left" ? "container-left" : "container-right"
      }`}
    >
      <div className="project-left-container">
        <img
          className="project-image"
          src={projectData.image}
          alt="project-image"
        />
      </div>
      <div className="project-right-container">
        <div className="project-waka-time-container">
          <div className="project-name">{projectData.name}</div>
          <img
            className="project-waka-time"
            src={projectData.wakaTimeImage}
            alt="waka-time-project-badge"
          />
        </div>
        <div className="project-links-container">
          <a className="project-link" href={projectData.github} target="_blank">
            <VscGithubInverted />
          </a>
          <a
            className="project-link"
            href={projectData.website}
            target="_blank"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
        <div className="project-bio">{projectData.bio}</div>
        <StackSlider stack={projectData.stack} />
      </div>
    </div>
  );
};

export default Project;
