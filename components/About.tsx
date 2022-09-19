import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left
     md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="https://avatars.githubusercontent.com/u/926932?v=4"
        className="-mb-20 md:mb-0 flex-shrink w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          10+ years of experience in full stack development with JavaScript,
          NodeJS and Microservices. Programming is not my job, a passion towards
          doing some good apps, enhancing this technology and creating
          groundbreaking apps. Reading on GitHub and capturing new ideas, coding
          standards and acquiring skills is my hobby too. Progressively updating
          my skills on technical skills and technical management (Architect)
          skills.
        </p>
      </div>
    </motion.div>
  );
}
