import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import MyProjects from "./pages/MyProjects";
import TechStack from "./pages/TechStack";

function App() {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (value: string) => {
    setLanguage(value);
    localStorage.setItem("lng", value);
  };

  useEffect(() => {
    const lsLanguage = localStorage.getItem("lng");
    if (lsLanguage) {
      if (lsLanguage === "cs") {
        setLanguage("cs");
      } else {
        setLanguage("en");
      }
    } else {
      setLanguage("en");
    }
  }, [language]);

  return (
    <div className="app">
      <Navbar
        language={language}
        onLanguageChange={(value) => changeLanguage(value)}
      />
      <AboutMe language={language} />
      <TechStack />
      <MyProjects language={language} />
      <ContactMe language={language} />
      <Footer />
    </div>
  );
}

export default App;
