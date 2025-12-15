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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  I’m a <span className="font-medium">BTech Computer Science student</span> with a
  strong interest in <span className="font-medium">Full Stack Development</span>{" "}
  and <span className="font-medium">DevOps</span>. I actively work with the{" "}
  <span className="font-medium">MERN stack</span>, use{" "}
  <span className="font-medium">docker</span> for containerization, and have
  recently been building applications using the{" "}
  <span className="font-medium">Next.js framework</span>. I’m passionate about
  learning and exploring new technologies and consistently try to implement
  them to solve <span className="italic">real-world problems</span>. My core
  stack includes{" "}
  <span className="font-medium">
    React, Node.js, Express.js, MongoDB, and Next.js
  </span>
  . I also have experience in{" "}
  <span className="font-medium">Android development</span> using XML and Java
  from my diploma background.
</p>


      <p>
  <span className="italic">When I’m not coding</span>, I enjoy playing video
  games, watching movies & series, and drawing sketches. I also love{" "}
  <span className="font-medium">learning new things</span> and exploring
  different interests. Currently, I’m learning about{" "}
  <span className="font-medium">history</span> and experimenting with{" "}
  <span className="font-medium">cooking</span>.
</p>

    </motion.section>
  );
}
