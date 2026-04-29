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
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col shrink-0 snap-center
                 w-[280px] sm:w-[340px] bg-white/50 dark:bg-slate-900/50 
                 border border-emerald-200/50 dark:border-emerald-900/30 
                 rounded-2xl overflow-hidden backdrop-blur-md shadow-sm hover:shadow-xl 
                 hover:-translate-y-1 transition-all duration-300 h-full"
    >
      {/* ── COMPACT IMAGE SECTION ── */}
      <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-slate-100 dark:bg-slate-800 p-3 sm:p-4 pb-0">
        
        {/* Floating Image Style */}
        <div className="relative w-full h-full rounded-t-lg overflow-hidden shadow-md border border-slate-200/50 dark:border-slate-700/50">
          <Image
            src={imageUrl}
            alt={title}
            fill
            quality={90}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Absolute Live Badge */}
        <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm border border-emerald-500/20">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-[9px] font-mono text-emerald-700 dark:text-emerald-400 font-bold tracking-wider uppercase">
            Live
          </span>
        </div>
      </div>

      {/* ── COMPACT CONTENT SECTION ── */}
      <div className="flex flex-col flex-grow p-4 sm:p-5">
        
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight">
          {title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 leading-snug text-xs sm:text-sm mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        
        {/* Simplified Tags (Shows max 3 to keep it clean, fades the rest) */}
        <ul className="flex flex-wrap gap-1.5 mb-5 overflow-hidden h-[22px]">
          {tags.map((tag, idx) => (
            <li
              key={idx}
              className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 
                         px-2 py-0.5 text-[9px] sm:text-[10px] font-mono tracking-wide text-emerald-700 dark:text-emerald-300 
                         rounded transition-all duration-300 whitespace-nowrap"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* ── ACTION BUTTON ── */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group/btn flex items-center justify-center gap-2 bg-emerald-50 dark:bg-emerald-950/30 
                       text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 
                       px-4 py-2 rounded-lg text-xs font-semibold transition-all 
                       hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-900 active:scale-95"
          >
            Visit Product
            <BsArrowUpRight className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}