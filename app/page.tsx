import Projects from "./components/projects";
import Toolbar from "./components/toolbar";
import Hero from "./components/hero";
import Timeline from "./components/timeline";
import ContactForm from "./components/contact";
import Skills from "./components/skills";
import { FaInstagram } from "react-icons/fa";


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Toolbar />
      <div className="h-screen">
        <Hero />
      </div>
      <Timeline/>
      <Projects />
      <Skills />
      <ContactForm/>
    </main>
  );
}
