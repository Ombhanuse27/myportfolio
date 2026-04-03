"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="relative my-16 lg:my-24 h-32 w-[1px] hidden sm:block z-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      {/* Faded background line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent w-full" />
      
      {/* Animated glowing 'data drip' indicator */}
      <motion.div
        className="absolute left-[-1px] w-[3px] h-1/4 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"
        animate={{
          top: ["0%", "75%", "0%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}