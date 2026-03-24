import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import healthSchedule from "@/public/health-schedule.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import blogVerse from "@/public/blog-verse.png";
import chatbot from "@/public/chatbot.png";
import DailyBasket from "@/public/daily-basket.png";
import ShowHub from "@/public/showhub.png";
import skillpulse from "@/public/skillpulse.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer Intern",
    location: "Softcadd Technologies, Pune",
    description:
"Developed and optimized production-ready frontend and backend modules using React, TypeScript, Tailwind CSS, and Supabase for a multi-role job search platform serving 200+ active users, improving application response time by 20%. Debugged production issues, optimized UI workflows, and collaborated using Git in an Agile development environment to deliver stable, production-ready deployments with improved application reliability.",
    icon: React.createElement(FaReact),
    date: "Jun 2026 - Present",
  },
  {
    title: "Full Stack Intern",
    location: "IIT Bombay EdTech Society",
    description:
      "Collaborated on full-stack project addressing real-world challenges in EdTech domain under guidance of IIT Bombay mentor, with strong focus on research-driven problem solving and implementation.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2025 - Oct 2025",
  },
  {
    title: "Software Trainee",
    location: "Collab Vision Infosolutions, Kolhapur",
    description:
    "Developed and contributed to real-world Web and Android applications, implementing features, integrating APIs, and improving applications performance, reliability, and user experience.",
    icon: React.createElement(FaReact),
    date: "Jun 2025 - Aug 2025",
  },
 
] as const;

export const projectsData = [
  {
    title: "HealthShedule",
    description:"Built a multi-hospital platform with phone call/online appointment booking in any preferred slot in day, centralized admin control for hospitals and doctors, and doctor consultations with e-prescriptions and video calls.",
    tags: ["MERN Stack", "AI Calling Agent", "WebRTC", "PeerJS","BrevoSDK","Vercel" ,"Render","Docker"],
    imageUrl: healthSchedule,
    link: "https://health-scheduling.vercel.app/",
    type:"web"
  },
   {
    title: "SkillPulse.ai",
    description:"Built a AI career coaching platform using AI agents to analyze resumes, identify skill gaps, generate actionable reports (roadmaps, project ideas, quizzes, ATS improvements) and conduct mock interviews with real-time feedback. Integrated Groq LLMs with langchain for low-latency inference for mock interview simulations and resume analysis for report.",
    tags: ["Next.js", "PDF-Parser", "Groq", "LLM","LangChain","Supabase" ,"Typescript"],
    imageUrl: skillpulse,
    link: "https://skills-pulse-ai-agent.vercel.app/",
    type:"web"
  },
  
  {
    title: "StudentGPT - AI Academic Assistant",
    description:
      "Developed an interactive Agentic AI chatbot that intelligently answers user queries, supports document-based Q&A (PDF/Word uploads), and performs real-time academic tasks like attendance and timetable retrieval using AI agents, Groq-powered inference, and a high-performance Next.js stack.",
    tags: ["Next.js", "Typescript", "Groq API", "Pdf-parser","MySQL","Agentic AI"],
    imageUrl:chatbot,
    type:"web",
    link: "https://dypcet-chatbot.vercel.app/",
  },
  {
    title: "BlogVerse",
    description:
    "Developed a interactive blogging platform that enables users to seamlessly publish content, connect with other bloggers through real-time chat powered by WebSockets, and engage socially by liking, sharing, saving, posts and following bloggers.",
    tags: ["MERN Stack", "Socket.io", "OAuth", "Vercel", "Render","Docker"],
    imageUrl: blogVerse,
    link: "https://blog-site-azure-ten.vercel.app/",
    type:"web"
  },
  
  {
    title: "DailyBasket",
    description:
    "Developed a grocery app for shopkeepers to manage inventory, track sales/revenue, and generate bills. Implemented role-based access for employees to manage products and billing.",
    tags: ["Flutter", "Dart", "Firebase", "Brevo"],
    imageUrl:DailyBasket,
    type:"mobile",
    link: "https://github.com/Ombhanuse27/daily_basket",
  },
  {
    title: "ShowHub",
    description:
    "Developed responsive and user-friendly movie ticket booking application where users can explore currently running movies, view showtimes, select seats, and book tickets and get downloadable ticket. Designed with real-world functionality and a smooth UI experience. ",
    tags: ["XML", "Java","Android SDK", "Firebase"],
    imageUrl:ShowHub,
    type:"mobile",
    link: "https://github.com/Ombhanuse27/showwhub",
  },

] as const;

export const skillsData = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Git/GitHub",
  "Tailwind",
  "MongoDB",
  "Supabase",
  "Postman",
  "Redux",
  "REST APIs",
  "GraphQL",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "Firebase",
  "Python",
  "PHP",
  "Vercel",
  "Render",
  "CI/CD",
  "Docker",


] as const;
