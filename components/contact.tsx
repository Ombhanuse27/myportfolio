"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-[45rem] mx-auto text-center relative z-10 px-4 sm:px-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 
                      bg-indigo-500/20 rounded-full blur-[100px] -z-10" />

      {/* Developer Background Watermark (Animated) */}
      <motion.div 
        animate={{ y: [0, -10, 0], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -right-10 text-[10rem] font-mono font-bold leading-none 
                   text-indigo-900 dark:text-white pointer-events-none select-none -z-10"
      >
        @
      </motion.div>

      <SectionHeading>Contact me</SectionHeading>

      {/* Removed the negative margin (-mt-6) and adjusted to mt-3 and mb-12 for consistent visual rhythm */}
      <p className="text-slate-600 dark:text-slate-300 mt-3 mb-12 text-sm sm:text-base">
        Please contact me directly at{" "}
        <a 
          className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline underline-offset-4 transition-all" 
          href="mailto:ombhanuse364@gmail.com"
        >
          ombhanuse364@gmail.com
        </a>{" "}
        or through this form.
      </p>

      {/* Glassmorphic Form Container */}
      <div className="group/form bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 
                      backdrop-blur-2xl rounded-[2rem] p-6 sm:p-10 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 
                      transition-all duration-500 relative overflow-hidden text-left">
        
        <span className="block font-mono text-indigo-500 text-xs sm:text-sm font-semibold mb-6 transition-transform duration-300 group-hover/form:translate-x-1">
          {`// Send a message`}
        </span>

        <form
          className="flex flex-col gap-4 group"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <div className="relative">
            <input
              className="h-14 w-full px-5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 
                         bg-white/60 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent 
                         focus:bg-white dark:focus:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-600/50 
                         transition-all duration-300 shadow-sm"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
          </div>
          
          <div className="relative">
            <textarea
              className="h-48 w-full p-5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 
                         bg-white/60 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent 
                         focus:bg-white dark:focus:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-600/50 
                         transition-all duration-300 shadow-sm resize-none"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />
          </div>

          <div className="mt-2 flex justify-end">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </motion.section>
  );
}