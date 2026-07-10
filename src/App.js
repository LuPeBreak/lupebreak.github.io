import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Techs from "./components/Techs.jsx";
import StarField from "./components/StarField.jsx";

function App() {
  return (
    <div className="App relative min-h-screen bg-cosmic-bg grid-pattern">
      {/* Background layers */}
      <StarField />
      <div className="nebula-overlay" />

      {/* Content */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        <Home />
        <About />
        <Techs />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
