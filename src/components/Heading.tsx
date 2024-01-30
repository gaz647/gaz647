import "./Heading.css";

const Heading = ({ text, color }: { text: string; color: string }) => {
  return (
    <div style={{ color: color }} className="heading">
      {text}
    </div>
  );
};

export default Heading;
