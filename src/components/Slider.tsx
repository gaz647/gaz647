import "./Slider.css";
import { v4 as uuidv4 } from "uuid";

interface SliderProps {
  stack: string[];
  time: number;
  style?: {
    width: string;
    maxWidth: string;
    oneStack: {
      backgroundColor: string;
      margin: string;
      padding: string;
      border: string;
      borderRadius: string;
      color: string;
      boxShadow?: string;
    };
  };
}

const Slider: React.FC<SliderProps> = ({ stack, time, style }) => {
  const customStyle = {
    "--t": `${time.toString()}s`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  return (
    <div
      className="slider"
      style={{ width: style?.width, maxWidth: style?.maxWidth }}
    >
      <div className="scroll" style={customStyle}>
        <div className="scroll-stack">
          {stack.map((oneStack) => {
            return (
              <span
                className="stack-item"
                key={uuidv4()}
                style={{
                  backgroundColor: style?.oneStack.backgroundColor,
                  margin: style?.oneStack.margin,
                  padding: style?.oneStack.padding,
                  border: style?.oneStack.border,
                  borderRadius: style?.oneStack.borderRadius,
                  color: style?.oneStack.color,
                  boxShadow: style?.oneStack.boxShadow,
                }}
              >
                {oneStack}
              </span>
            );
          })}
        </div>
        <div className="scroll-stack">
          {stack.map((oneStack) => {
            return (
              <span
                className="stack-item"
                key={uuidv4()}
                style={{
                  backgroundColor: style?.oneStack.backgroundColor,
                  margin: style?.oneStack.margin,
                  padding: style?.oneStack.padding,
                  border: style?.oneStack.border,
                  borderRadius: style?.oneStack.borderRadius,
                  color: style?.oneStack.color,
                  boxShadow: style?.oneStack.boxShadow,
                }}
              >
                {oneStack}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
