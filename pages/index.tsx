import type { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkils";
import { fetchSocials } from "../utils/fetchSocials";

// type Props = {
//   pageInfo: PageInfo;
//   skills: Skill[];
//   projects: Project[];
//   socials: Social[];
// };

// const Home = ({ pageInfo, skills, projects, socials }: Props) => {
const Home = () => {
  return (
    <div className="bg-[rgba(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth md:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-white">
      <Head>
        <title>Alexis Nunez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[] = await fetchSocials();
//   console.log(socials);

//   return {
//     props: {
//       pageInfo,
//       skills,
//       projects,
//       socials,
//     },
//     revalidate: 10,
//   };
// };
