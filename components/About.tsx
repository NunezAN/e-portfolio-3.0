import { DocumentIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-around md:kustify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src="https://media.newyorker.com/photos/5c882173b52af22cd6fe65c9/master/w_2560%2Cc_limit/720318_ra623.jpg"
        className="-mb-24 mt-24 md:mt-0 md:mb-0 flex-shrink-0 w-40 h-40 sm:w-40 h-50 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-0 md:space-y-10 px-0 md:px-10">
        <h4 className="hidden md:block text-4xl font-semibold">
          Here&apos;s a bit about{" "}
          <span className="underline decoration-[#7289da]/50">me.</span>
        </h4>
        <p className="text-sm sm:text-base md:text-lg md:leading-8">
          I&apos;m based out of Dallas/Fort Worth with 3 years experience in the tech field. I have a newly found passion for building web applications with responsive ui that provide great intuitive user experiences. I am strong in design and integration with intuitive problem-solving skills. Proficient in JAVASCRIPT, HTML and CSS with the ability to translate business requirements into technical solutions. Looking to start a new step in my career as an entry-level frontend software engineer.
        </p>
        <div className="hidden md:flex items-center">
          <span>Click to see my resume:</span>
          <a href="resume.pdf" target="_blank">
            <DocumentIcon className="text-[#808080] h-6 w-6 ml-2 hover:text-white animate-bounce" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
