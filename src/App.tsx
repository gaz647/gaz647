import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import MyProjects from "./pages/MyProjects";

function App() {
  const clientLanguage = navigator.language;

  const [language, setLanguage] = useState("en");

  const changeLanguage = (value: string) => {
    setLanguage(value);
    localStorage.setItem("lng", value);
  };

  useEffect(() => {
    const lsLanguage = localStorage.getItem("lng");
    if (lsLanguage && lsLanguage === "cs") {
      setLanguage("cs");
    } else if (lsLanguage && lsLanguage === "en") {
      setLanguage("en");
    } else if (!lsLanguage && clientLanguage && clientLanguage === "cs") {
      setLanguage("cs");
    } else if (!lsLanguage && clientLanguage && clientLanguage === "en") {
      setLanguage("en");
    } else {
      setLanguage("en");
    }
  }, [clientLanguage, language]);

  return (
    <div className="app">
      <Navbar
        language={language}
        onLanguageChange={(value) => changeLanguage(value)}
      />
      <AboutMe language={language} />
      <MyProjects language={language} />
      <ContactMe language={language} />
      <Footer />
    </div>
  );
}

export default App;
