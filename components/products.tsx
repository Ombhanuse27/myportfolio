"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { productsData } from "@/lib/data";
import Product from "./product";
import { useSectionInView } from "@/lib/hooks";
import { motion, useInView } from "framer-motion";

export default function Products() {
  const { ref } = useSectionInView("Products", 0.5);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="products" className="scroll-mt-28 mb-28 w-full max-w-7xl mx-auto z-10 relative">
      
      {/* Background Decor */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] -z-10" />

      <SectionHeading>Real-World Products</SectionHeading>
      
      <p className="text-center text-slate-600 dark:text-slate-400 mb-10 -mt-4 font-mono text-sm px-4">
        {`// Applications currently in production with active users`}
      </p>

      {/* 🎞 HORIZONTAL SCROLL WRAPPER */}
      <div className="relative w-full">
        <motion.div 
          ref={scrollRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          /* Added `items-stretch` so all cards share the exact same height */
          className="flex overflow-x-auto items-stretch gap-6 pb-12 pt-4 px-4 sm:px-8 snap-x snap-mandatory
                     [&::-webkit-scrollbar]:h-2.5
                     [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:dark:bg-slate-800/50 [&::-webkit-scrollbar-track]:rounded-full
                     [&::-webkit-scrollbar-thumb]:bg-emerald-300/80 [&::-webkit-scrollbar-thumb]:dark:bg-emerald-600/50 [&::-webkit-scrollbar-thumb]:rounded-full
                     hover:[&::-webkit-scrollbar-thumb]:bg-emerald-400 hover:[&::-webkit-scrollbar-thumb]:dark:bg-emerald-500
                     transition-all"
        >
          {productsData.map((product, index) => (
            <Product key={product.title} {...product} index={index} />
          ))}
          
          {/* Spacer to allow scrolling past the last item neatly */}
          <div className="shrink-0 w-2 sm:w-4" />
        </motion.div>

        {/* Fade edges for premium look */}
        <div className="absolute top-0 right-0 bottom-12 w-8 sm:w-16 bg-gradient-to-l from-[#f3f4f6] dark:from-[#0f172a] to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 left-0 bottom-12 w-8 sm:w-16 bg-gradient-to-r from-[#f3f4f6] dark:from-[#0f172a] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}