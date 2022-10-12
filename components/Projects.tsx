import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      title: "FES Internship",
      image: "https://e-portfolio-02.vercel.app/assets/internshipCover.png",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est dolorum eligendi, quis quo, alias, fugit similique error voluptas unde odio amet esse numquam dolorem. Obcaecati soluta ab maiores necessitatibus. Perferendis eligendi ullam ipsa, est animi laborum fuga illo vel!",
      linkToBuild: "https://nunez-internship-git-main-nunezan.vercel.app/",
      linkToGit: "https://github.com/NunezAN/Nunez-Internship",
    },
    {
      title: "Ecommerce Movie Application",
      image: "https://e-portfolio-02.vercel.app/assets/blockbusterCover.png",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est dolorum eligendi, quis quo, alias, fugit similique error voluptas unde odio amet esse numquam dolorem. Obcaecati soluta ab maiores necessitatibus. Perferendis eligendi ullam ipsa, est animi laborum fuga illo vel!",
      linkToBuild: "https://react-library-phi.vercel.app/",
      linkToGit: "https://github.com/NunezAN/react-library",
    },
    {
      title: "Marvel Comic Application",
      image: "https://e-portfolio-02.vercel.app/assets/marvelProject.png",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est dolorum eligendi, quis quo, alias, fugit similique error voluptas unde odio amet esse numquam dolorem. Obcaecati soluta ab maiores necessitatibus. Perferendis eligendi ullam ipsa, est animi laborum fuga illo vel!",
      linkToBuild: "https://marvel-1b3e8.web.app/",
      linkToGit: "https://github.com/NunezAN/marvel-react",
    },
    {
      title: "Google/Gmail Clone",
      image: "https://e-portfolio-02.vercel.app/assets/googleClone.png",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est dolorum eligendi, quis quo, alias, fugit similique error voluptas unde odio amet esse numquam dolorem. Obcaecati soluta ab maiores necessitatibus. Perferendis eligendi ullam ipsa, est animi laborum fuga illo vel!",
      linkToBuild: "https://github.com/NunezAN/google-clone",
      linkToGit: "https://clone-11a1a.web.app/",
    },
    {
      title: "Twitter Clone",
      image: "https://e-portfolio-02.vercel.app/assets/twitterClone.png",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est dolorum eligendi, quis quo, alias, fugit similique error voluptas unde odio amet esse numquam dolorem. Obcaecati soluta ab maiores necessitatibus. Perferendis eligendi ullam ipsa, est animi laborum fuga illo vel!",
      linkToBuild: "https://twitter-clone-e4f49.web.app/",
      linkToGit: "https://github.com/NunezAN/Twitter-clone",
    },
    {
      title: "Hulu Clone",
      image:
        "https://cdn.sanity.io/images/owbhdwhm/production/334e4f969fe6df9be28e813ecf5c12130e8c2b5d-1920x1080.png?w=2000&fit=max&auto=format",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est dolorum eligendi, quis quo, alias, fugit similique error voluptas unde odio amet esse numquam dolorem. Obcaecati soluta ab maiores necessitatibus. Perferendis eligendi ullam ipsa, est animi laborum fuga illo vel!",
      linkToBuild: "https://hulu-2-0-iota.vercel.app/",
      linkToGit: "https://github.com/NunezAN/hulu-2.0",
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
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 md:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-white">
        {projects.map((project, index) => (
          <div key={index} className="relative scroll-smooth">
            <a
              href={`#slide${index != 0 ? index - 1 : 5}`}
              className="btn btn-circle absolute z-21 top-1/2 left-[100px] opacity-0 md:opacity-100"
            >
              ❮
            </a>
            <div
              id={`slide${index}`}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen snap-mandatory"
            >
              <motion.img
                initial={{ y: -300 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="hidden md:block md:w-[800px] rounded-lg"
                src={project.image}
                alt=""
              />
              <motion.div
                initial={{ y: 300 }}
                transition={{ duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-10 px-0 md:px-10 max-w-6xl"
              >
                <h4 className="text-4xl font-semibold text-center">
                  {project.title}
                </h4>
                <p className="text-lg text-center md:text-left">
                  {project.summary}
                </p>
              </motion.div>
            </div>
            <a
              href={`#slide${index != 5 ? index + 1 : 0}`}
              className="btn btn-circle absolute z-21 top-1/2 right-[100px] opacity-0 md:opacity-100"
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
