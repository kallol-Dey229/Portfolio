import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import Contact from "@/components/Contact";
import ScrollUI from "@/components/ScrollUI";

export default function Home() {
  return (
    <main>
      <ScrollUI />
      <Header />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Hobbies />
      <Contact />
    </main>
  );
}