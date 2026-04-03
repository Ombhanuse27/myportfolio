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
      className="mb-28 max-w-[50rem] w-full text-center sm:mb-40 scroll-mt-28 relative z-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* Subtle background developer decoration */}
      <div className="absolute -top-12 -right-8 text-[12rem] font-mono font-bold leading-none 
                      text-indigo-900/[0.02] dark:text-white/[0.02] pointer-events-none select-none z-0">
        {`</>`}
      </div>

      {/* Glassmorphic Card Container */}
      <div className="bg-white/40 dark:bg-slate-900/40 border border-white/60 dark:border-slate-800 
                      backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-14 shadow-2xl shadow-indigo-500/5 
                      relative overflow-hidden text-left z-10">
        
        {/* Centered Heading */}
        <div className="flex items-center justify-center mb-10">
          <SectionHeading>About me</SectionHeading>
        </div>

        {/* Text Content */}
        <div className="space-y-8 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-light">
          
          {/* Paragraph 1 */}
          <div className="relative">
            <span className="block font-mono text-indigo-500 text-sm font-semibold mb-2">
              {`// 01. The Coder`}
            </span>
            <p>
              I’m a <span className="text-slate-900 dark:text-white font-medium">BTech Computer Science student</span> with a
              strong interest in <span className="text-indigo-600 dark:text-indigo-400 font-medium">Full Stack Development</span>{" "}
              and <span className="text-indigo-600 dark:text-indigo-400 font-medium">DevOps</span>. I actively work with the{" "}
              {/* Tech Badges */}
              <span className="bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 px-2 py-0.5 rounded-md font-mono text-sm mx-1">MERN stack</span>, use{" "}
              <span className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 px-2 py-0.5 rounded-md font-mono text-sm mx-1">docker</span> 
              for containerization, and have recently been building applications using the{" "}
              <span className="text-slate-900 dark:text-white font-medium">Next.js framework</span>. I’m passionate about
              learning and exploring new technologies and consistently try to implement
              them to solve <span className="italic text-slate-500 dark:text-slate-400">real-world problems</span>. My core
              stack includes{" "}
              <span className="text-slate-900 dark:text-white font-semibold">
                React, Node.js, Express.js, MongoDB, and Next.js
              </span>. I also have experience in{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">Android development</span> using XML and Java
              from my diploma background.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="relative">
            <span className="block font-mono text-emerald-500 dark:text-emerald-400 text-sm font-semibold mb-2">
              {`// 02. The Human`}
            </span>
            <p>
              <span className="italic">When I’m not coding</span>, I enjoy playing video
              games, watching movies & series, and drawing sketches. I also love{" "}
              <span className="text-slate-900 dark:text-white font-medium">learning new things</span> and exploring
              different interests. Currently, I’m learning about{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">history</span> and experimenting with{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">cooking</span>.
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}