import "./TechStack.css";
import { useInView } from "react-intersection-observer";

const TechStack = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stack = [
    "HTML",
    "CSS",
    "TypeScript",
    "React",
    "React-Router",
    "Redux-Toolkit",
    "Git",
    "Firebase",
    "VScode",
    "Vite",
    "Photoshop",
    "Linux",
    "macOS",
  ];

  return (
    <div className="tech-stack">
      <div className="tech-stack-inner-container">
        <div
          ref={ref}
          className={`tech-stack-animation-container ${
            inView && "tech-stack-animation"
          }`}
        >
          {stack.map((oneStack, index) => {
            let delay = 0.1 * index;
            delay = delay + 0.5;
            return (
              <div
                className="tech-stack-item"
                style={{ animation: `scaleStack 1.5s ${delay}s infinite` }}
                key={index}
              >
                {oneStack}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
