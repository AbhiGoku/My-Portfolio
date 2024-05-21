import styles from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import { Hero } from "./Components/Hero/Hero";
import { About } from "./Components/About/About";
import { Experience } from "./Components/Experience/Experience";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";

function App() {
  return (
    <>
    <div className={styles.scrollWatcher}></div>
      <div className={styles.App}>
        <NavBar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
