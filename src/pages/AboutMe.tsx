import "./AboutMe.css";
import profileImage from "../images/man-gradient.png";
import { FaHeart } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="wrapper about-me">
      <img className="profile-image" src={profileImage} alt="profile-image" />
      <div className="about-me-text-container">
        <div className="gaz647">gaz647</div>
        <div className="front-end">
          Front-End{" "}
          <span>
            <br />
          </span>{" "}
          Developer
        </div>
        <div className="in-love">
          in{" "}
          <span className="heart">
            <FaHeart />
          </span>{" "}
          with web apps
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
