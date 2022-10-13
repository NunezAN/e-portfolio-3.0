import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {};

export default function Projects({}: Props) {
  const tech = {
    html: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    css: "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png",
    javasscript:
      "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png",
    react:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    redux:
      "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    firebase: "https://services.google.com/fh/files/newsletters/firebase.png",
    next: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
    api: "https://www.humhub.com/marketplace/rest/download-image",
    tailwind:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    github:
      "https://pnggrid.com/wp-content/uploads/2022/03/Github-Logo-White.png",
  };
  const projects = [
    {
      title: "FES Internship",
      image: "https://e-portfolio-02.vercel.app/assets/internshipCover.png",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est dolorum eligendi, quis quo, alias, fugit similique error voluptas unde odio amet esse numquam dolorem. Obcaecati soluta ab maiores necessitatibus. Perferendis eligendi ullam ipsa, est animi laborum fuga illo vel!",
      linkToBuild: "https://nunez-internship-git-main-nunezan.vercel.app/",
      linkToGit: "https://github.com/NunezAN/Nunez-Internship",
      technologies: [
        tech.javasscript,
        tech.react,
        tech.api,
        tech.html,
        tech.css,
      ],
    },
    {
      title: "Ecommerce Movie Application",
      image: "https://e-portfolio-02.vercel.app/assets/blockbusterCover.png",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est dolorum eligendi, quis quo, alias, fugit similique error voluptas unde odio amet esse numquam dolorem. Obcaecati soluta ab maiores necessitatibus. Perferendis eligendi ullam ipsa, est animi laborum fuga illo vel!",
      linkToBuild: "https://react-library-phi.vercel.app/",
      linkToGit: "https://github.com/NunezAN/react-library",
      technologies: [
        tech.javasscript,
        tech.react,
        tech.api,
        tech.html,
        tech.css,
      ],
    },
    {
      title: "Marvel Comic Application",
      image: "https://e-portfolio-02.vercel.app/assets/marvelProject.png",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est dolorum eligendi, quis quo, alias, fugit similique error voluptas unde odio amet esse numquam dolorem. Obcaecati soluta ab maiores necessitatibus. Perferendis eligendi ullam ipsa, est animi laborum fuga illo vel!",
      linkToBuild: "https://marvel-1b3e8.web.app/",
      linkToGit: "https://github.com/NunezAN/marvel-react",
      technologies: [
        tech.javasscript,
        tech.react,
        tech.api,
        tech.redux,
        tech.firebase,
        tech.html,
        tech.css,
      ],
    },
    {
      title: "Google/Gmail Clone",
      image: "https://e-portfolio-02.vercel.app/assets/googleClone.png",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est dolorum eligendi, quis quo, alias, fugit similique error voluptas unde odio amet esse numquam dolorem. Obcaecati soluta ab maiores necessitatibus. Perferendis eligendi ullam ipsa, est animi laborum fuga illo vel!",
      linkToBuild: "https://github.com/NunezAN/google-clone",
      linkToGit: "https://clone-11a1a.web.app/",
      technologies: [
        tech.javasscript,
        tech.react,
        tech.api,
        tech.redux,
        tech.firebase,
        tech.html,
        tech.css,
      ],
    },
    {
      title: "Twitter Clone",
      image: "https://e-portfolio-02.vercel.app/assets/twitterClone.png",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est dolorum eligendi, quis quo, alias, fugit similique error voluptas unde odio amet esse numquam dolorem. Obcaecati soluta ab maiores necessitatibus. Perferendis eligendi ullam ipsa, est animi laborum fuga illo vel!",
      linkToBuild: "https://twitter-clone-e4f49.web.app/",
      linkToGit: "https://github.com/NunezAN/Twitter-clone",
      technologies: [
        tech.javasscript,
        tech.react,
        tech.firebase,
        tech.html,
        tech.css,
      ],
    },
    {
      title: "Hulu Clone",
      image:
        "https://cdn.sanity.io/images/owbhdwhm/production/334e4f969fe6df9be28e813ecf5c12130e8c2b5d-1920x1080.png?w=2000&fit=max&auto=format",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est dolorum eligendi, quis quo, alias, fugit similique error voluptas unde odio amet esse numquam dolorem. Obcaecati soluta ab maiores necessitatibus. Perferendis eligendi ullam ipsa, est animi laborum fuga illo vel!",
      linkToBuild: "https://hulu-2-0-iota.vercel.app/",
      linkToGit: "https://github.com/NunezAN/hulu-2.0",
      technologies: [
        tech.javasscript,
        tech.next,
        tech.tailwind,
        tech.api,
        tech.html,
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative mt-12 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 md:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-white">
        {projects.map((project, index) => (
          <div key={index} className="relative scroll-smooth">
            <a
              href={`#slide${index != 0 ? index - 1 : 5}`}
              className="btn btn-circle text-5xl absolute z-21 top-1/2 left-[80px] xl:left-[160px] opacity-0 md:opacity-100 h-[80px] w-[80px]"
            >
              ❮
            </a>
            <div
              id={`slide${index}`}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen snap-mandatory"
            >
              <a
                href={project.linkToBuild}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  className="md:w-[600px] rounded-lg"
                  src={project.image}
                  alt=""
                />
              </a>
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1 }}
                className="space-y-10 px-0 md:px-10 max-w-6xl"
              >
                <a
                  href={project.linkToBuild}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4 className="text-4xl font-semibold text-center hover:text-gray-500 transition duration-300 ease-in-out">
                    {project.title}
                  </h4>
                </a>
                <div className="flex items-center justify-center space-x-2">
                  {project.technologies.map((tech, index) => (
                    <img src={tech} key={index} className="h-10 w-10" />
                  ))}
                </div>
                <p className="hidden md:block text-lg text-center md:text-left">
                  {project.summary}
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://github.com/NunezAN"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-white h-8 w-8 m-4 hover:text-white transition duration-300 ease-in-out animate-pulse"
                    />
                  </a>
                </div>
              </motion.div>
            </div>
            <a
              href={`#slide${index != 5 ? index + 1 : 0}`}
              className="btn btn-circle text-5xl absolute z-21 top-1/2 right-[80px] xl:right-[160px] opacity-0 md:opacity-100 h-[80px] w-[80px]"
            >
              ❯
            </a>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#7289da]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
