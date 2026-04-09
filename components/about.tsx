"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      // Added mt-24 sm:mt-32 to fix the overlap with the intro marquee
      className="mb-28 mt-24 sm:mt-32 max-w-[50rem] w-full text-center sm:mb-40 scroll-mt-28 relative z-10 px-4 sm:px-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* Animated Floating Background Brackets */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-16 -right-8 sm:-right-16 text-[10rem] sm:text-[15rem] font-mono font-bold leading-none 
                   text-indigo-900/[0.03] dark:text-white/[0.02] pointer-events-none select-none z-0"
      >
        {`</>`}
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-10 -left-8 sm:-left-16 text-[8rem] sm:text-[12rem] font-mono font-bold leading-none 
                   text-indigo-900/[0.03] dark:text-white/[0.02] pointer-events-none select-none z-0"
      >
        {`{}`}
      </motion.div>

      {/* Glassmorphic IDE Window Container */}
      <div className="bg-white/40 dark:bg-slate-900/40 border border-white/60 dark:border-slate-800 
                      backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-indigo-500/10 
                      relative overflow-hidden text-left z-10 flex flex-col">

        {/* IDE Window Header (Mac OS Style) */}
        <div className="flex items-center px-5 py-4 bg-white/60 dark:bg-slate-800/60 border-b border-white/60 dark:border-slate-700/50 backdrop-blur-md">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/90 shadow-inner"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/90 shadow-inner"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-inner"></div>
          </div>
          <p className="ml-4 font-mono text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span className="text-indigo-500">~/portfolio</span> / about.tsx
          </p>
        </div>

        {/* Window Content */}
        <div className="p-6 sm:p-14 pt-8 sm:pt-10">
          {/* Centered Heading */}
          <div className="flex items-center justify-center mb-10">
            <SectionHeading>About me</SectionHeading>
          </div>

          {/* Text Content */}
          <div className="space-y-8 text-slate-600 dark:text-slate-300 text-sm sm:text-lg leading-relaxed font-light">

            {/* Paragraph 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative group"
            >
              <span className="block font-mono text-indigo-500 text-xs sm:text-sm font-semibold mb-2 transition-transform group-hover:translate-x-1">
                {`// 01. The Coder`}
              </span>
              <p>
                I am a <span className="text-slate-900 dark:text-white font-medium">BTech Computer Science student</span> with a strong focus on
                <span className="text-indigo-600 dark:text-indigo-400 font-medium"> Full Stack Development</span> and
                <span className="text-indigo-600 dark:text-indigo-400 font-medium"> DevOps</span>. I specialize in building scalable web applications using the
                <span className="bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 px-2 py-0.5 rounded-md font-mono text-xs sm:text-sm mx-1">MERN stack</span>
                and have hands-on experience with
                <span className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 px-2 py-0.5 rounded-md font-mono text-xs sm:text-sm mx-1">Docker</span>
                for containerization and deployment. I also work extensively with the
                <span className="text-slate-900 dark:text-white font-medium">Next.js framework</span> to develop modern, high-performance applications.

                <br /><br />

                My core technical stack includes
                <span className="text-slate-900 dark:text-white font-semibold"> React, Node.js, Express, MongoDB, and Next.js</span>,
                with a strong foundation in system design and problem-solving. I am passionate about applying emerging technologies to solve
                <span className="italic text-slate-500 dark:text-slate-400"> real-world problems</span> and continuously improving through hands-on development.

                <br /><br />

                Additionally, I have prior experience in
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">Android development</span> using XML and Java from my diploma background.
              </p>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative group"
            >
              <span className="block font-mono text-emerald-500 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-2 transition-transform group-hover:translate-x-1">
                {`// 02. The Human`}
              </span>
              <p>
                <span className="italic">When I’m not coding</span>, I enjoy playing video games, watching movies and series, and sketching. I also have a strong interest in
                <span className="text-slate-900 dark:text-white font-medium"> continuous learning</span> and exploring diverse domains. Currently, I’m expanding my knowledge in
                <span className="text-indigo-600 dark:text-indigo-400 font-medium"> history with science</span>.
              </p>
            </motion.div>

            {/* Blinking Terminal Cursor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 sm:w-3 h-4 sm:h-5 bg-indigo-500 ml-1 mt-2 align-middle rounded-sm"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}