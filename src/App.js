import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Techs from "./components/Techs.jsx";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <Techs/>
    </div>
  );
}

export default App;
