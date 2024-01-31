import "./AboutMe.css";
// import profileImage from "../images/man-gradient.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import Heart from "../images/heart.svg";

const AboutMe = ({ language }: { language: string }) => {
  return (
    <div className="about-me">
      <div className="about-me-text-container">
        <div className="about-me-text-item gaz647 text-shadow">gaz647</div>
        <div className="about-me-text-item front-end text-shadow">
          Front-End{" "}
          <span className="front-end-br">
            <br />
          </span>{" "}
          Developer
        </div>
        <div className="about-me-text-item in-love text-shadow">
          {language === "en" ? "in" : "s"}{" "}
          <span className="heart">
            <img className="heart-svg" src={Heart} alt="" />
          </span>{" "}
          {language === "en" ? "with web apps" : "k webovým aplikacím"}
        </div>
        <div className="social-container">
          <div className="social-container-icon scale-icon">
            <FaLinkedinIn />
          </div>
          <div className="social-container-icon scale-icon">
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
