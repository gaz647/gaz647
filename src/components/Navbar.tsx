import "./Navbar.css";
import { useEffect, useState } from "react";
import enFlag from "../images/en.svg";
import csFlag from "../images/cs.svg";

const Navbar = ({
  language,
  onLanguageChange,
}: {
  language: string;
  onLanguageChange: (value: string) => void;
}) => {
  const [btnActive, setBtnActive] = useState("");
  const [btnsVisible, setBtnsVisible] = useState(false);

  const handleOnLanguageChange = (value: string) => {
    onLanguageChange(value);
    setBtnActive(value);
    document.documentElement.lang = value;
  };

  useEffect(() => {
    setBtnActive(language);
    setBtnsVisible(true);
  }, [language, setBtnsVisible]);

  return (
    <div className="navbar">
      <div
        className={`navbar-circle-language-btns-container  ${
          btnsVisible && "navbar-circle-language-btns-container-visible"
        }`}
      >
        <div
          className={`circle-language-flag-btn ${
            btnActive === "cs" ? "inactive-circle-btn" : null
          }`}
          onClick={() => handleOnLanguageChange("en")}
        >
          <img className="flag-svg" src={enFlag} alt="language-button-en" />
        </div>
        <div
          className={`circle-language-flag-btn ${
            btnActive === "en" ? "inactive-circle-btn" : null
          }`}
          onClick={() => handleOnLanguageChange("cs")}
        >
          <img className="flag-svg" src={csFlag} alt="language-button-cs" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
