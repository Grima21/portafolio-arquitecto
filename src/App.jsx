import "./App.css";
import PrincipalHero from "./components/hero/PrincipalHero";
import Projects from "./components/Projects";
import Profiles from "./components/Profile";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main>
      <PrincipalHero />
      <Projects />
      <Profiles />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
