"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 px-4"
    >
      <SectionHeading>My skills</SectionHeading>
      
      <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-4 text-lg text-slate-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="group bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 
                       backdrop-blur-md rounded-2xl px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-mono
                       text-slate-700 dark:text-slate-300 shadow-sm hover:shadow-md hover:shadow-indigo-500/10
                       hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 
                       dark:hover:text-indigo-400 transition-all duration-300 cursor-default"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={{ scale: 1.05, y: -2 }}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {/* Added a tiny code-like dot before each skill */}
            <span className="text-indigo-500 mr-2 opacity-50 transition-opacity duration-300 group-hover:opacity-100">#</span>
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}