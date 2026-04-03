"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative flex justify-center">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 sm:top-6 flex w-[calc(100%-2rem)] sm:w-auto max-w-full items-center justify-center 
                   rounded-full bg-white/40 dark:bg-slate-900/40 border border-white/60 dark:border-slate-800/60 
                   shadow-lg shadow-indigo-500/5 backdrop-blur-xl px-2 py-2 sm:px-4 transition-all"
      >
        <ul className="flex items-center justify-start sm:justify-center gap-1 sm:gap-2 flex-nowrap 
                       w-full sm:w-auto overflow-x-auto scroll-smooth
                       [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {links.map((link) => (
            <motion.li
              className="relative flex items-center justify-center shrink-0"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 rounded-full font-mono text-[11px] sm:text-[13px] font-medium transition-colors duration-300",
                  {
                    "text-indigo-700 dark:text-indigo-300": activeSection === link.name,
                    "text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400": activeSection !== link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {/* Developer touch: Added subtle curly braces to the active link */}
                {activeSection === link.name ? `{ ${link.name} }` : link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-white dark:bg-slate-800 
                               shadow-sm border border-slate-200/50 dark:border-slate-700/50"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}