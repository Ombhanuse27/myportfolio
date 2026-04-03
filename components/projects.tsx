"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [activeType, setActiveType] = useState<"web" | "mobile">("web");

  const filteredProjects = projectsData.filter(
    (project) => project.type === activeType
  );

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 w-full max-w-6xl mx-auto px-4 z-10 relative">
      
      {/* Background Decor */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />

      <SectionHeading>My projects</SectionHeading>

      {/* 🔘 GLASSMORPHIC FILTER BUTTONS */}
      <div className="flex justify-center gap-3 mb-12">
        {["web", "mobile"].map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type as "web" | "mobile")}
            className={`relative px-6 py-2.5 rounded-full text-sm font-mono tracking-wide transition-all duration-300 backdrop-blur-md border overflow-hidden
              ${
                activeType === type
                  ? "text-white border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "bg-white/40 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-white/60 dark:hover:bg-slate-800/60"
              }`}
          >
            {activeType === type && (
              <motion.span
                layoutId="active-pill"
                className="absolute inset-0 bg-indigo-500 -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{type === "web" ? "{ Web }" : "<Mobile />"}</span>
          </button>
        ))}
      </div>

      {/* 🎞 RESPONSIVE PROJECT GRID */}
      {/* Changed to a grid: 1 column on mobile, 2 columns horizontally on tablet/desktop */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <Project key={project.title} {...project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}