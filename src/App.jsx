import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Profiles from "./components/Profile";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Projects />
      <Profiles />
      <Contact />
    </main>
  );
}

export default App;
