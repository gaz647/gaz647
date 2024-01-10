import "./App.css";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import MyProjects from "./pages/MyProjects";
import TechStack from "./pages/TechStack";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <AboutMe />
      <TechStack />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
