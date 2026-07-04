import Hero from "./components/Hero";
import Proof from "./components/Proof";
import Journey from "./components/Journey";
import About from "./components/About";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Proof />
      <Journey />
      <About />
      <Projects />
      <Process />
      <Contact />
    </main>
  );
}
