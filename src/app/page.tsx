import type { GetStaticProps, Metadata } from "next";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import ContactMe from "../../components/ContactMe";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchSocials } from "../../utils/fetchSocials";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchExperiences } from "../../utils/fetchExperiences";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


export const metadata: Metadata = {
  title: 'Jacklyn\'s Portfolio',
}


export default function Home({pageInfo, experiences, projects, skills, socials}: Props) {
  return (
    <div className="bg-[#ffffff] text-[#123568] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar scrollbar-track-white scrollbar-thumb-[#2251b2]">
      <Header socials={socials}/>

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img src="./avatars/logo.png"
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0
            border border-[#123568] cursor-pointer"
            />
          </div>
        </footer>
      </Link>

    </div>
  );
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 100 secs
    revalidate: 100,
  };
}
