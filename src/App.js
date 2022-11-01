import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
    </div>
  );
}

export default App;
