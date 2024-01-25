import "./Slider.css";
import { v4 as uuidv4 } from "uuid";

interface SliderProps {
  stack: string[];
  time: number;
}

const Slider: React.FC<SliderProps> = ({ stack, time }) => {
  const customStyle = {
    "--t": `${time.toString()}s`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  return (
    <div className="slider">
      <div className="scroll" style={customStyle}>
        <div className="scroll-stack">
          {stack.map((oneStack) => {
            return <span key={uuidv4()}>{oneStack}</span>;
          })}
        </div>
        <div className="scroll-stack">
          {stack.map((oneStack) => {
            return <span key={uuidv4()}>{oneStack}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
