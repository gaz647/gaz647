import "./Navbar.css";
import { useEffect, useState } from "react";

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
        className={`navbar-language-btns-container black-container ${
          btnsVisible && "navbar-language-btns-container-visible"
        }`}
      >
        <div
          className={`navbar-language-btn ${
            btnActive === "en" ? "active-btn" : null
          }`}
          onClick={() => handleOnLanguageChange("en")}
        >
          EN
        </div>

        <div
          className={`navbar-language-btn ${
            btnActive === "cs" ? "active-btn" : null
          }`}
          onClick={() => handleOnLanguageChange("cs")}
        >
          CS
        </div>
      </div>
    </div>
  );
};

export default Navbar;
