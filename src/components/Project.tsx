import "./Project.css";
import { v4 as uuidv4 } from "uuid";

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
    stack: string[];
  };
}

const Project: React.FC<ProjectProps> = ({ projectData }) => {
  return (
    <div className="project-container">
      <img src="" alt="" />
      <h2>{projectData.name}</h2>
      <StackSlider stack={projectData.stack} />
    </div>
  );
};

export default Project;
