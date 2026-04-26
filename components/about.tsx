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
      // Tightened the overall margins to reduce empty scrolling gaps
      className="mb-20 mt-24 sm:mt-32 max-w-[50rem] w-full text-center sm:mb-32 scroll-mt-28 relative z-10 px-4 sm:px-0"
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
      <div className="group bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 
                      backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 
                      transition-all duration-500 relative overflow-hidden text-left z-10 flex flex-col">

        {/* IDE Window Header (Mac OS Style) */}
        <div className="flex items-center px-4 sm:px-6 py-3 sm:py-4 bg-white/60 dark:bg-slate-800/50 border-b border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md transition-colors group-hover:bg-white/80 dark:group-hover:bg-slate-800/70">          
          <div className="flex gap-2">
            {/* Added interactive hover states to the window buttons */}
            <div className="w-3 h-3 rounded-full bg-rose-500/90 shadow-inner hover:bg-rose-400 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/90 shadow-inner hover:bg-amber-400 transition-colors cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-inner hover:bg-emerald-400 transition-colors cursor-pointer"></div>
          </div>
          <p className="ml-4 font-mono text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span className="text-indigo-500">~/portfolio</span> / about.tsx
          </p>
        </div>

        {/* Window Content */}
        {/* Tightened padding to remove excessive inner white space */}
        <div className="p-4 sm:p-10 pt-6 sm:pt-10">
          {/* Centered Heading */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <SectionHeading>About me</SectionHeading>
          </div>

          {/* Text Content */}
          {/* Reduced space-y to make the blocks feel more connected */}
          <div className="space-y-4 sm:space-y-6 text-slate-600 dark:text-slate-300 text-sm sm:text-lg leading-relaxed font-light">

            {/* Paragraph 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative group/block p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-2xl transition-all duration-300 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 hover:-translate-y-1 hover:shadow-sm"
            >
              <span className="block font-mono text-indigo-500 text-xs sm:text-sm font-semibold mb-3 transition-transform group-hover/block:translate-x-1">
                {`// 01. The Coder`}
              </span>
              
              {/* Removed <br/><br/> and replaced with semantic flex spacing for better gap control */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <p>
                  I am a <span className="text-slate-900 dark:text-white font-medium">BTech Computer Science student</span> focused on
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium"> Full Stack Development</span> and
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium"> DevOps</span>. I build scalable applications using the
                  {/* Made the technology tags interactive */}
                  <span className="bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 px-2 py-0.5 rounded-md font-mono text-xs sm:text-sm mx-1 inline-block hover:scale-105 hover:bg-indigo-200 dark:hover:bg-indigo-500/40 transition-all cursor-default shadow-sm">MERN stack</span>
                  and have hands-on experience with
                  <span className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 px-2 py-0.5 rounded-md font-mono text-xs sm:text-sm mx-1 inline-block hover:scale-105 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all cursor-default shadow-sm">Docker</span>
                  for deployment. I also use the
                  <span className="text-slate-900 dark:text-white font-medium"> Next.js framework</span> to build modern, high-performance apps.
                </p>

                <p>
                  Skilled in
                  <span className="text-slate-900 dark:text-white font-semibold"> React, Node.js, Express, MongoDB, and Next.js</span>,
                  with a strong foundation in system design and problem-solving. Passionate about solving
                  <span className="italic text-slate-500 dark:text-slate-400"> real-world problems</span> through hands-on development.
                </p>

                <p>
                  Also experienced in
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium"> Android development</span> (Java & XML) from my diploma background.
                </p>
              </div>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative group/block p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-2xl transition-all duration-300 hover:bg-slate-50/80 dark:hover:bg-slate-800/40 hover:-translate-y-1 hover:shadow-sm"
            >
              <span className="block font-mono text-emerald-500 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-3 transition-transform group-hover/block:translate-x-1">
                {`// 02. The Human`}
              </span>
              <p>
                <span className="italic">When I’m not coding</span>, I enjoy playing video games, watching movies and series, and sketching. I also have a strong interest in
                <span className="text-slate-900 dark:text-white font-medium"> continuous learning</span> and exploring diverse domains. Currently, I’m expanding my knowledge in
                <span className="text-indigo-600 dark:text-indigo-400 font-medium cursor-default hover:text-indigo-500 transition-colors"> history with science</span>.
                
                {/* Blinking Terminal Cursor moved inline for a better terminal feel */}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 bg-indigo-500 ml-2 -mb-0.5 align-baseline rounded-sm"
                />
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}