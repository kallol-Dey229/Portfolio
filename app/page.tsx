import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import ScrollUI from "@/components/ScrollUI";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <ScrollUI />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Hobbies />
      <Contact />
    </main>
  );
}