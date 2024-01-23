import "./TechStack.css";
import { useInView } from "react-intersection-observer";

const TechStack = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="tech-stack">
      <div className="tech-stack-inner-container">
        <div
          ref={ref}
          className={`tech-stack-animation-container ${
            inView && "tech-stack-animation"
          }`}
        >
          <div className="tech-stack-item">HTML</div>
          <div className="tech-stack-item">CSS</div>
          <div className="tech-stack-item">TypeScript</div>
          <div className="tech-stack-item">React</div>
          <div className="tech-stack-item">React-Router</div>
          <div className="tech-stack-item">Redux-Toolkit</div>
          <div className="tech-stack-item">Git</div>
          <div className="tech-stack-item">Firebase</div>
          <div className="tech-stack-item">VScode</div>
          <div className="tech-stack-item">Vite</div>
          <div className="tech-stack-item">Photoshop</div>
          <div className="tech-stack-item">Linux</div>
          <div className="tech-stack-item">macOS</div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
