"use client";

import { productsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

type ProductProps = (typeof productsData)[number] & { index: number };

export default function Product({
  title,
  description,
  tags,
  imageUrl,
  link,
  index,
}: ProductProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col shrink-0 snap-center
                 w-[300px] sm:w-[380px] bg-white dark:bg-slate-900 
                 border border-slate-200/80 dark:border-slate-800 
                 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl 
                 hover:-translate-y-1 transition-all duration-300"
    >
      {/* ── IMAGE SECTION (Flush with borders) ── */}
      <div className="relative w-full aspect-[16/10] bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800/50 overflow-hidden shrink-0">
        
        <Image
          src={imageUrl}
          alt={title}
          fill
          quality={95}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* ── PERFECTED LIVE BADGE (Matches your image) ── */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-full shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 tracking-widest uppercase">
            Live
          </span>
        </div>
      </div>

      {/* ── CONTENT SECTION (Uniform Padding) ── */}
      <div className="flex flex-col flex-grow p-6">
        
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm line-clamp-3">
            {description}
          </p>
        </div>
        
        {/* Tags */}
        <ul className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <li
              key={idx}
              className="bg-slate-100 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50 
                         px-2.5 py-1 text-[10px] sm:text-xs font-mono font-medium text-slate-600 dark:text-slate-300 
                         rounded-md"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* ── ACTION BUTTON (Pushed exactly to the bottom) ── */}
        <div className="mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group/btn flex items-center justify-center gap-2 bg-emerald-50 dark:bg-emerald-500/10 
                       text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50 
                       px-4 py-2.5 rounded-xl text-sm font-semibold transition-all 
                       hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-900 active:scale-95"
          >
            Visit Platform
            <BsArrowUpRight className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
        
      </div>
    </motion.article>
  );
}