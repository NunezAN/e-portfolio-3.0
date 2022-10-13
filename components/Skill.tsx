import React from "react";
import { motion } from "framer-motion";

type Props = {
  url: string;
  name: string;
};

export default function Skill({ url, name }: Props) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      className="group relative flex flex-col items-center cursor-pointer p-2"
    >
      <img
        src={url}
        className="w-14 object-fill md:w-28  xl:w-32 group-hover:scale-90 group-hover:brightness-90 transition duration-300 ease-in-out"
        // className="w-16 h-12 object-fill md:w-28 md:h-24 xl:w-32 xl:h-28 group-hover:scale-90 group-hover:brightness-90 transition duration-300 ease-in-out"
      />
      <span className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out text-center mt-2 text:l xl:text-xl">
        {name}
      </span>
    </motion.div>
  );
}
