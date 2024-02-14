import "./Project.css";
import { VscGithubInverted } from "react-icons/vsc";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Slider from "./Slider";

interface ProjectProps {
  projectData: {
    name: string;
    image: string;
    bio_en: string;
    bio_cs: string;
    website: string;
    github: string;
    wakaTimeImage: string;
    stack: string[];
    position: string;
  };
  language: string;
}

const sliderStyle = {
  width: "100%",
  maxWidth: "900px",
  oneStack: {
    backgroundColor: "inherit",
    margin: "0.8rem",
    padding: "0.4rem 0.7rem",
    border: "solid 2px whitesmoke",
    borderRadius: "5px",
    color: "rgb(51, 51, 51)",
    boxShadow: "0px 0px 10px rgb(214, 214, 214)",
  },
};

const Project: React.FC<ProjectProps> = ({ projectData, language }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`project-container ${
        projectData.position === "left" ? "container-left" : "container-right"
      } ${inView && `slide-in-${projectData.position}`}`}
    >
      <div className="project-image-container">
        <img
          className="project-image"
          src={projectData.image}
          alt="project-image"
        />
      </div>
      <div className="project-info-container">
        <div className="project-name">{projectData.name}</div>
        <div className="project-waka-time-container">
          <img
            className="project-waka-time"
            src={projectData.wakaTimeImage}
            alt="waka-time-project-badge"
          />
        </div>
        <div className="project-links-container">
          <div className="project-link-container scale-icon">
            <a
              className="project-link"
              href={projectData.github}
              target="_blank"
            >
              <VscGithubInverted />
            </a>
          </div>
          <div className="project-link-container scale-icon">
            <a
              className="project-link"
              href={projectData.website}
              target="_blank"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="project-bio">
          {language === "en" ? projectData.bio_en : projectData.bio_cs}
        </div>
        <div className="project-stack-container">
          <Slider stack={projectData.stack} speed={2} style={sliderStyle} />
        </div>
      </div>
    </div>
  );
};

export default Project;
