import Projects from "./components/projects";
import Toolbar from "./components/toolbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center">
      <Toolbar/>
      <Hero/>
    </main>
  );
}
