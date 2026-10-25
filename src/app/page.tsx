import type { Metadata } from "next";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";
import Link from "next/link";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchSocials } from "../../utils/fetchSocials";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchExperiences } from "../../utils/fetchExperiences";

export const metadata: Metadata = {
  title: "Jacklyn's Portfolio",
};

export const revalidate = 100;

export default async function Home() {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return (
    <div className="bg-[#ffffff] text-[#123568] min-h-screen overflow-x-hidden z-0 
    scrollbar scrollbar-track-white scrollbar-thumb-[#2251b2]">
      <Header socials={socials || []} />

      <section id="hero">
        <Hero pageInfo={pageInfo!} />
      </section>

      <section id="about">
        <About pageInfo={pageInfo!} />
      </section>

      <section id="experience">
        <WorkExperience experiences={experiences || []} />
      </section>

      <section id="skills">
        <Skills skills={skills || []} />
      </section>

      <section id="projects">
        <Projects projects={projects || []} />
      </section>

      <section id="contact">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              src="/avatars/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0
              border border-[#123568] cursor-pointer"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
