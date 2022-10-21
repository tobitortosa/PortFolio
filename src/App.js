import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <NavBar />
    </div>
  );
}

export default App;
