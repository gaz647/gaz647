import "./AboutMe.css";
import { BsPersonVcard } from "react-icons/bs";
// import { BsBook } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { PiSuitcaseThin, PiHeartLight } from "react-icons/pi";

import { IoShareSocialOutline } from "react-icons/io5";
import { BsCodeSlash } from "react-icons/bs";

import Slider from "../components/Slider";

const AboutMe = ({ language }: { language: string }) => {
  const stack = [
    "HTML",
    "CSS",
    "TypeScript",
    "React",
    "React-Router",
    "Redux-Toolkit",
    // "React Native",
    // "Expo",
    "Firebase",
    "Bootstrap",
    "MaterialUI",
    "Docker",
    "Axios",
    "npm",
    "Git",
    "Github",
    "VScode",
    "Vite",
    "Netlify",
    "Jira",
    "Slack",
    "Vue",
    "Photoshop",
    "Linux",
    "macOS",
    "HTML",
    "CSS",
    "TypeScript",
    "React",
    "React-Router",
    "Redux-Toolkit",
    // "React Native",
    // "Expo",
    "Firebase",
    "Bootstrap",
    "MaterialUI",
    "Docker",
    "Axios",
    "npm",
    "Git",
    "Github",
    "VScode",
    "Vite",
    "Netlify",
    "Jira",
    "Slack",
    "Vue",
    "Photoshop",
    "Linux",
    "macOS",
  ];

  const sliderStyle2 = {
    width: "100%",
    fontSize: "1rem",
    oneStack: {
      backgroundColor: "inherit",
      border: "solid 1px whitesmoke",
      borderRadius: "5px",
      fontSize: "1rem",
      fontWeight: "bold",
      color: "whitesmoke",
      margin: "0 0.5rem",
      padding: "0.2rem 0.5rem",
    },
  };

  return (
    <section className="about-me">
      <div className="black-container about-me-object-container">
        <div className="object-item start-and-end-of-object">{`const me = {`}</div>

        <div className="object-item-container">
          <div className="object-icon-container card-icon">
            <BsPersonVcard />
            <span className="semi-colon">:</span>
          </div>
          <div className="object-key-value gaz647">gaz647</div>
        </div>

        <div className="object-item-container">
          <div className="object-icon-container work-icon">
            <PiSuitcaseThin />
            <span className="semi-colon">:</span>
          </div>
          <div className="object-key-value">
            {language === "en" ? "Front-End Developer" : "Front-End vývojář"}
          </div>
        </div>

        <div className="object-item-container">
          <div className="object-icon-container heart-icon">
            <PiHeartLight />
            <span className="semi-colon">:</span>
          </div>
          <div className="object-key-value">
            {language === "en" ? "with web apps" : "webové aplikace"}
          </div>
        </div>

        {/* <div className="object-item-container">
          <div className="object-icon-container book-icon">
            <BsBook />
            <span className="semi-colon">:</span>
          </div>
          <div className="object-key-value">React Native</div>
        </div> */}

        <div className="object-item-container">
          <div className="object-icon-container social-icon">
            <IoShareSocialOutline />
            <span className="semi-colon">:</span>
          </div>
          <div className="social-icon-container object-key-value">
            <div className="social-icon-container-icon scale-icon">
              <a
                className="social-icon-a"
                href="https://www.linkedin.com/in/gaz647/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="social-icon-container-icon scale-icon">
              <a
                className="social-icon-a"
                href="https://github.com/gaz647"
                target="_blank"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="object-item-container">
          <div className="object-icon-container code-icon">
            <BsCodeSlash />
            <span className="semi-colon">:</span>
          </div>
          <div className="object-slider-container">
            <Slider stack={stack} speed={2} style={sliderStyle2} />
          </div>
        </div>

        <div className="object-item start-and-end-of-object">{`}`}</div>
      </div>
    </section>
  );
};

export default AboutMe;
