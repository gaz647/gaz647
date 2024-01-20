import "./AboutMe.css";
import profileImage from "../images/man-gradient.png";
import { FaHeart } from "react-icons/fa";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const AboutMe = ({ language }: { language: string }) => {
  return (
    <div className="about-me">
      <div className="about-me-profile-image-container">
        <img className="profile-image" src={profileImage} alt="profile-image" />
      </div>

      <div className="about-me-text-container">
        <div className="about-me-text-item gaz647">gaz647</div>
        <div className="about-me-text-item front-end">
          Front-End{" "}
          <span>
            <br />
          </span>{" "}
          Developer
        </div>
        <div className="about-me-text-item in-love">
          {language === "en" ? "in" : "s"}{" "}
          <span className="heart">
            <FaHeart />
          </span>{" "}
          {language === "en" ? "with web apps" : "k webovým aplikacím"}
        </div>
        <div className="social-container">
          <div className="social-container-icon">
            <FaLinkedin />
          </div>
          <div className="social-container-icon">
            <FaGithubSquare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
