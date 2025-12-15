"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-10 block"
    >
<section className="bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 border border-black/5 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row max-w-5xl mx-auto sm:min-h-[28rem] h-full overflow-hidden">
  
  {/* LEFT SIDE: Description */}
  <div className="flex flex-col justify-between p-6 sm:p-10 sm:w-2/5">
    <div>
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-4 text-gray-700 dark:text-white/70 leading-relaxed">{description}</p>
    </div>
    <ul className="flex flex-wrap mt-6 gap-2">
      {tags.map((tag, idx) => (
        <li
          key={idx}
          className="bg-black/[0.75] dark:bg-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white dark:text-white/80 rounded-full transition-all duration-300 hover:scale-110 hover:bg-black/90 dark:hover:bg-white/40"
        >
          {tag}
        </li>
      ))}
    </ul>
  </div>

  {/* RIGHT SIDE: Image */}
  {/* RIGHT SIDE: Image */}
<div className="relative sm:w-3/5 w-full sm:h-auto h-full pl-[4px]">
  <Image
  src={imageUrl}
  alt={title}
  fill
  className="object-cover object-[2px_center]  transition-transform duration-500 group-hover:scale-105"
/>

</div>

</section>

    </motion.a>
  );
}
