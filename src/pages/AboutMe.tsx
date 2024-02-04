import "./AboutMe.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { GoHeartFill } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import Slider from "../components/Slider";

const AboutMe = ({ language }: { language: string }) => {
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

  const sliderStyle = {
    width: "100%",
    maxWidth: "900px",
    oneStack: {
      backgroundColor: "#000000",
      margin: "0.5rem",
      padding: "0.5rem 0.8rem",
      border: "solid 2px whitesmoke",
      borderRadius: "10px",
      color: "whitesmoke",
    },
  };

  return (
    <div className="about-me">
      <div className="black-container about-me-object-container">
        <div className="object-item start-and-end-of-object">{`const me = {`}</div>

        <div className="object-item-container">
          <div className="object-icon-container card-icon">
            <FaAddressCard />
            <span className="semi-colon">:</span>
          </div>
          <div className="object-key-value">gaz647,</div>
        </div>

        <div className="object-item-container">
          <div className="object-icon-container code-icon">
            <FaCode />
            <span className="semi-colon">:</span>
          </div>
          <div className="object-key-value">
            {language === "en" ? "Front-End Developer," : "Front-End vývojář,"}
          </div>
        </div>

        <div className="object-item-container">
          <div className="object-icon-container heart-icon">
            <GoHeartFill />
            <span className="semi-colon">:</span>
          </div>
          <div className="object-key-value">
            {language === "en" ? "with web apps," : "webové aplikace,"}
          </div>
        </div>

        <div className="object-item-container">
          <div className="object-icon-container social-icon">
            <IoShareSocialOutline />
            <span className="semi-colon">:</span>
          </div>
          <div className="social-icon-container object-key-value">
            <div className="social-icon-container-icon">
              <FaLinkedinIn />
            </div>
            <div className="social-icon-container-icon">
              <FaGithub />
            </div>
          </div>
        </div>

        <div className="object-item start-and-end-of-object">{`}`}</div>
      </div>
      {/* TECH STACK */}
      <Slider stack={stack} time={50} style={sliderStyle} />
    </div>
  );
};

export default AboutMe;
