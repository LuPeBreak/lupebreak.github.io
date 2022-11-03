import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Techs from "./components/Techs.jsx";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Techs/>
      <Projects/>
    </div>
  );
}

export default App;
