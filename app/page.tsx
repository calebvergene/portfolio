import Projects from "./components/projects";
import Toolbar from "./components/toolbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Toolbar />
      <div className="h-screen">
        <Hero />
      </div>
      <Projects />
    </main>
  );
}
