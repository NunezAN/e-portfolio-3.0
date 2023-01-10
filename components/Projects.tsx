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
    api: "https://cdn-icons-png.flaticon.com/512/1493/1493169.png",
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
        `-The goal of this internship project was to transform a completely static HTML, CSS, JavaScript and React single page application into an interactive user interface through the use of animations, transitions and carousels.\n -Processed API requests to dynamically represent data from a cloud server and represented it through skeleton loading states, pagination and dynamic routing.\n-Utilized Git version control and the GitHub interface to work and thrive in a collaborative team environment.`,
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
        "-This project was created to serve as an ecommerce application for a company selling movies. This application was created using React and javascript.\n-All the movie data is being fetched and processed using axios from `The Movie DB API`.\n-The movie collection can be seen by clicking the Movies section in the nav. The movies page has the functionaly to dynamically filter all the movies using the filter dropdown.\n-The Application has the functionality to dynamically add or remove items to the cart and display the information on the checkout page.",
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
        "-This application was created with the purpose of searching a marvel hero's name, retrieving the hero's available comic book information and storing a collection of the users favorite comic books.\n-All the comic book data displayed was fetched and processed using axios from the official Marvel API.\n-After the user selects a comic book, they have the ability to add/remove the comic book to/from their collection of favorites by clicking on the star on the top right of the comic book detail screen. This functionality was created using Firebase's Firestore to create a database and w/ the ability to store/remove data in real-time.\n-The user can then click on `My Favorites` on the header section and view their stored collection of favorited comics.",
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
        "-This project is intended to have the same look and feel of Google search engine and gmail web application using React and CSS.\n-All the data displayed during the Google search is being fetched and processed using axios from Googles search API.\n-For the gmail web application, Firebase's Authentication was used to take in google credentials as a login. Firebase's Firestore was used as the backend service to build a mock Gmail account database.\n-User can send out an email in the same Gmail fashion by clicking on the compose button. Once the email is sent, it will populate the firestore db and be displayed on the Gmail feed. The emails in the email have functionality and can be clicked to view contents.",
      linkToBuild: "https://clone-11a1a.web.app/",
      linkToGit: "https://github.com/NunezAN/google-clone",
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
        "-This project is intended to have the same look and feel of Twitter using React and javascript.\n-Using Firebase's Firestore as the backend service, you are able to send out a tweet with an image/gif url and populate the database in real-time. As soon as the backend is updated, the tweet will be displayed on the feed using a flip animation similar to the experience from the official twitter website.",
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
        "-This project is intended to have the same look and feel of hulu but with a modern layout usind tailwind css and next.js.\n-All the movie/show data displayed is being fetched and processed using axios from `The Movie DB API`.\n-Using tailwind css, the application is fully responsive to display the movie/show data from a mobile device to a TV screen.",
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
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center md:justify p-20 md:p-44 h-screen snap-mandatory"
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
                  className="max-w-[300px] md:max-w-[340px] lg:max-w-[500px] xl:max-w-[600px]rounded-lg object-contain"
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
                <p className="hidden md:block text-sm lg:text-md xl:text-[18px] text-center md:text-left whitespace-pre-line">
                  {project.summary}
                </p>
                <div className="flex justify-center">
                  <a
                    href={project.linkToGit}
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
