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
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>

      {/* 🔘 FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-10">
        {["web", "mobile"].map((type) => (
          <div
            key={type}
            onClick={() => setActiveType(type as "web" | "mobile")}
            className={`cursor-pointer px-6 py-2 rounded-full text-sm font-medium transition
              ${
                activeType === type
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-white/10 dark:text-white/70"
              }`}
          >
            {type === "web" ? "Web" : "Mobile"}
          </div>
        ))}
      </div>

      {/* 🎞 PROJECT LIST WITH ANIMATION */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
