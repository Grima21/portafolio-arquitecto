import "./App.css";
import PrincipalHero from "./components/hero/PrincipalHero";
import Projects from "./components/Projects";
import Profiles from "./components/Profile";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <PrincipalHero />
      <Projects />
      <Profiles />
      <Contact />
    </main>
  );
}

export default App;
