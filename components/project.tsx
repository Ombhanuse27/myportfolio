"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number] & { githubUrl?: string; index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  githubUrl,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.article
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col bg-white/40 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 
                 rounded-[1.5rem] overflow-hidden backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 
                 transition-all duration-500 h-full"
    >
      {/* ── IMAGE SECTION (Reduced Height) ── */}
      {/* Changed height from h-64/72 to h-48/56 to make the card less top-heavy */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-indigo-900/10 dark:bg-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* ── CONTENT SECTION (Tightened Padding) ── */}
      {/* Reduced padding from p-8 to p-5/6 */}
      <div className="flex flex-col flex-grow p-5 sm:p-6">
        
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        
        {/* Added line-clamp-4 to force a maximum height limit on text */}
        <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-5 flex-grow line-clamp-4">
          {description}
        </p>
        
        {/* Tech Stack Tags (Reduced bottom margin) */}
        <ul className="flex flex-wrap gap-1.5 mb-6">
          {tags.map((tag, idx) => (
            <li
              key={idx}
              className="bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 
                         px-2.5 py-1 text-[10px] sm:text-xs font-mono tracking-wide text-indigo-700 dark:text-indigo-300 
                         rounded-md transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-500/30"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* ── ACTION BUTTONS ── */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-200 dark:border-slate-800/60">
          
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 group/btn flex items-center justify-center gap-2 bg-slate-900 dark:bg-white 
                       text-white dark:text-slate-900 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all 
                       hover:scale-[1.02] active:scale-95 shadow-md"
          >
            View Live Project
            <BsArrowUpRight className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View Source Code"
              className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white/50 dark:bg-slate-800/50 
                         border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 
                         hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/50 
                         hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all active:scale-95 shadow-sm"
            >
              <FaGithub size={18} className="sm:w-[20px] sm:h-[20px]" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}