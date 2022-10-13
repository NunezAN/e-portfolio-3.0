import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <a
          href="https://www.linkedin.com/in/alexis-nunez-7b468624a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="text-[#808080] h-6 w-6 m-4 hover:text-white"
          />
        </a>
        <a href="https://github.com/NunezAN" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-[#808080] h-6 w-6 m-4 hover:text-white"
          />
        </a>
        <a href="resume.pdf" target="_blank">
          <DocumentIcon className="text-[#808080] h-6 w-6 m-4 hover:text-white" />
        </a>
      </motion.div>
      <Link href="#contact" className="hover:text-white">
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer group"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-[#808080] h-6 w-6 m-4 group-hover:text-white"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 group-hover:text-white">
            Let&apos;s have a chat
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
