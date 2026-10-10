import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Terminal from "@/components/Terminal";
import GitHubActivity from "@/components/GitHubActivity";
import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import ScrollUI from "@/components/ScrollUI";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <ScrollUI />
      <CommandPalette />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Terminal />
      <GitHubActivity />
      <Education />
      <Hobbies />
      <Contact />
    </main>
  );
}