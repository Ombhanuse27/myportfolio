"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import mine from "@/public/mine.jpeg";
import { useActiveSectionContext } from "@/context/active-section-context";

const roles = ["Full-Stack Developer", "DevOps Explorer", "Next.js Builder", "MERN Stack Developer","Agentic AI Enthusiast"];
const STACK = ["React", "Next.js", "Node", "Express", "TypeScript","Docker","MongoDB","PostgreSQL","Supabase","GitHub","Vercel","Render"];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [tick, setTick] = useState(true);
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const floatX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const floatY = useSpring(mouseY, { stiffness: 40, damping: 25 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const { left, top, width, height } = el.getBoundingClientRect();
      mouseX.set(((e.clientX - left) / width - 0.5) * 20);
      mouseY.set(((e.clientY - top) / height - 0.5) * 20);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      t = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30);
    } else {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIndex]);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => !t), 530);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  return (
    <section ref={ref} id="home" className="scroll-mt-[100rem] w-full">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track { animation: marquee 25s linear infinite; }
      `}</style>

      <div
        ref={containerRef}
        className="relative pt-6 pb-28 lg:pt-10 lg:pb-24 flex flex-col lg:flex-row items-center 
                   bg-transparent overflow-hidden"
      >
        <div className="absolute top-[5%] right-[5%] lg:top-[10%] lg:right-[10%] text-[8rem] lg:text-[15rem] font-mono font-bold leading-none
                        text-indigo-900/[0.03] dark:text-white/[0.03] pointer-events-none select-none z-0">
          {`{}`}
        </div>

        <div className="relative z-10 flex flex-col justify-center px-5 sm:px-10 lg:px-20
                        lg:w-[58%] text-left w-full mt-4 lg:mt-0">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 mb-6 lg:mb-8 w-fit px-3 py-1.5 lg:px-4 
                       bg-white/40 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 
                       rounded-md backdrop-blur-md font-mono text-[11px] sm:text-[13px] shadow-sm"
          >
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">const</span>
            <span className="text-slate-600 dark:text-slate-300">status</span>
            <span className="text-slate-400">=</span>
            <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 ml-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              'Available for work';
            </span>
          </motion.div>

          <div className="mb-4 lg:mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-[clamp(2.75rem,8vw,5.5rem)] font-extrabold leading-[1.05]
                         text-slate-900 dark:text-white tracking-tight"
            >
              Om <br className="hidden sm:block" /> Bhanuse
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/40 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 
                       rounded-lg px-3 py-2 lg:px-4 lg:py-2.5 mb-6 inline-flex items-center gap-2 lg:gap-3 
                       font-mono text-xs sm:text-sm lg:text-base shadow-sm backdrop-blur-md w-fit"
          >
            <span className="text-indigo-600 dark:text-indigo-400 font-bold select-none">~/dev $</span>
            <span className="text-slate-800 dark:text-slate-200 font-medium tracking-wide">{displayed}</span>
            <span
              className={`inline-block w-[6px] lg:w-[8px] h-[1.1em] bg-indigo-500 align-middle
                          transition-opacity duration-100 ${tick ? "opacity-100" : "opacity-0"}`}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed
                       max-w-[42ch] mb-8 lg:mb-10"
          >
            Full-stack developer skilled in building scalable web applications using {" "}
            <span className="text-slate-900 dark:text-white font-semibold">MERN stack, Next.js, Agentic AI, and DevOps</span>.
            Turning ideas into fast, scalable, production-ready products.{" "}

            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Code. Build. Optimize. Ship.</span>
          </motion.p>

          {/* ── FIXED CTAs (Buttons are now inline) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-3 lg:gap-4"
          >
            {/* Removed w-full from Contact Button */}
            <Link
              href="#contact"
              onClick={() => { setActiveSection("Contact"); setTimeOfLastClick(Date.now()); }}
              className="group bg-slate-900 dark:bg-white text-white dark:text-slate-900
                         px-4 py-3 sm:px-5 lg:px-7 lg:py-3.5 rounded-full font-medium text-[11px] sm:text-xs lg:text-sm
                         flex items-center gap-2 lg:gap-3 hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20 
                         dark:hover:shadow-white/20 transition-all duration-300"
            >
              <span className="font-mono text-indigo-400 dark:text-indigo-600 opacity-70 group-hover:opacity-100 transition-opacity">{`>`}_</span> 
              Contact me
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Removed w-full from the wrapper div */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="/Om_Bhanuse_7757098385.pdf"
                download
                className="group bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-white 
                           px-4 py-3 sm:px-5 lg:px-7 lg:py-3.5 rounded-full font-medium text-[11px] sm:text-xs lg:text-sm backdrop-blur-sm
                           flex items-center gap-2 border border-slate-200 dark:border-slate-800
                           hover:bg-white dark:hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-sm"
              >
                CV <span className="font-mono text-[9px] sm:text-[10px] lg:text-xs opacity-50 ml-0.5">.pdf</span>
                <HiDownload className="group-hover:translate-y-0.5 transition-transform opacity-70" />
              </a>

              {[
                { href: "https://www.linkedin.com/in/om-bhanuse-097635295/", icon: <BsLinkedin size={15} className="sm:w-[16px] sm:h-[16px] lg:w-[18px] lg:h-[18px]" />, label: "LinkedIn" },
                { href: "https://github.com/Ombhanuse27", icon: <FaGithubSquare size={16} className="sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]" />, label: "GitHub" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full
                             bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800
                             text-slate-600 dark:text-slate-400 shadow-sm
                             hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 hover:border-indigo-200 
                             hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10 mt-12 pt-8 lg:mt-16
                       border-t border-slate-200/60 dark:border-slate-800/60 justify-center sm:justify-start"
          >
            {[
              { val: "10+", label: "Projects" },
              { val: "5+", label: "Years coding" },
              { val: "5+", label: "Tech Stack" },
            ].map(({ val, label }) => (
              <div key={label} className="flex flex-col items-center sm:items-start">
                <span className="font-bold text-2xl lg:text-3xl text-slate-900 dark:text-white">
                  {val}
                </span>
                <span className="text-[10px] lg:text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative lg:w-[42%] w-full flex items-center justify-center mt-16 lg:mt-0 lg:py-0 z-10 px-4 sm:px-0">
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-indigo-400/20 dark:bg-indigo-600/20 blur-[60px] lg:blur-[80px]" />
          <motion.div
            style={{ x: floatX, y: floatY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="hidden sm:block absolute -top-4 -left-4 lg:-top-6 lg:-left-6 text-3xl lg:text-4xl font-mono text-indigo-400/30 font-light pointer-events-none">{`<`}</div>
            <div className="hidden sm:block absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 text-3xl lg:text-4xl font-mono text-indigo-400/30 font-light pointer-events-none">{`/>`}</div>
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px] rounded-3xl lg:rounded-[2.5rem] overflow-hidden
                            shadow-2xl shadow-indigo-500/10 border-2 border-white/60 dark:border-slate-800/60">
              <Image
                src={mine}
                alt="Om Bhanuse"
                fill
                quality={95}
                priority
                className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 lg:-bottom-5 left-1/2 -translate-x-1/2 
                            bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl px-4 py-2 lg:px-5 lg:py-2.5 
                            rounded-full border border-white dark:border-slate-700 shadow-xl 
                            flex items-center gap-2 lg:gap-3 w-max">
              <span className="text-xs lg:text-sm font-medium text-slate-800 dark:text-slate-200">
                Om Bhanuse
              </span>
              <div className="w-px h-3 lg:h-4 bg-slate-300 dark:bg-slate-700" />
              <span className="flex items-center gap-1.5 text-[9px] lg:text-[11px] font-mono font-bold
                               text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                Online
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 overflow-hidden
                     border-t border-slate-200/50 dark:border-slate-800/50
                     bg-white/40 dark:bg-slate-950/40 backdrop-blur-md py-2.5 lg:py-3.5 z-20"
        >
          <div className="flex w-max marquee-track">
            {[...STACK, ...STACK, ...STACK].map((s, i) => (
              <span
                key={i}
                className="text-xs lg:text-sm font-mono font-medium text-slate-600 dark:text-slate-400
                           tracking-widest mx-6 lg:mx-8 flex items-center gap-2 lg:gap-3"
              >
                <span className="text-indigo-400/50 dark:text-indigo-600/50">{`{ }`}</span> {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}