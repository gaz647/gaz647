import "./Slider.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";

interface SliderProps {
  stack: string[];
  speed: number;
  style?: {
    width: string;
    maxWidth?: string;
    oneStack: {
      backgroundColor: string;
      border: string;
      borderRadius: string;
      boxShadow?: string;
      color: string;
      fontSize?: string;
      fontWeight?: string;
      margin: string;
      padding: string;
    };
  };
}

const Slider: React.FC<SliderProps> = ({ stack, speed, style }) => {
  const customStyle = {
    "--t": `${(stack.length * speed).toString()}s`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any;

  return (
    <div
      className="slider"
      style={{
        width: style?.width,
        maxWidth: style?.maxWidth,
      }}
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
                  fontSize: style?.oneStack.fontSize,
                  fontWeight: style?.oneStack.fontWeight,
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
                  fontSize: style?.oneStack.fontSize,
                  fontWeight: style?.oneStack.fontWeight,
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
