import type { Metadata } from "next"
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";
 
export const metadata: Metadata = {
  title: 'Jacklyn\'s Portfolio',
}


export default function Home() {
  return (
    <div className="bg-[rgb(255,255,255)] text-[rgb(18,53,104)] h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />

      <section id="hero" className="snap-start">
        <Hero /> 
      </section>

      <section id="about" className="snap-center">
        <About />  
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
    
  );
}
