import Hero from "./components/Hero";
import Proof from "./components/Proof";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Metrics from "./components/Metrics";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Proof />
      <Journey />
      <Projects />
      <Metrics />
      <Process />
      <Testimonials />
      <Contact />

    </main>
  );
}