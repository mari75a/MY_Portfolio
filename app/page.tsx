import About from "@/components/sections/About";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Insights from "@/components/sections/Insights";
import Knowledge from "@/components/sections/Knowledge";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-accentSoft">
     <Hero />
     <About />
     <Education />
     <Certificates/>
     <Projects />
     <Insights />
     <Knowledge/>
     <Skills />
     {/* <Experience/> */}
     <Contact/>
    </main>
  );
}
