import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import healthSchedule from "@/public/Health-schedule.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import blogVerse from "@/public/blog-verse.png";
import chatbot from "@/public/chatbot.png";
import DailyBasket from "@/public/daily-basket.png";
import ShowHub from "@/public/showhub.png";
import skillpulse from "@/public/skillpulse.png";
import prosearch from "@/public/prosearch.png";
import pranayoga from "@/public/pranayoga.png"
import proacademy from "@/public/proacademy.png"
import proofice from "@/public/prooffice.png"
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
    name: "Products", // <--- ADD THIS
    hash: "#products", // <--- ADD THIS
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
      "Developed and optimized production-ready frontend and backend modules using React.js, Node.js, TypeScript, Tailwind CSS, and Supabase across 5 live production applications including a multi-role job search platform serving 150+ active users. Implemented RBAC and JWT-based authentication flows, integrated third-party APIs, and resolved production-level frontend and backend issues across 5 live applications in an Agile development environment.",
        icon: React.createElement(FaReact),
    date: "Jun 2026 - May 2026",
  },
  {
    title: "Full Stack Intern",
    location: "IIT Bombay - EdTech Society",
    description:
      "Engineered scalable full-stack modules for an EdTech platform using React.js, Node.js, Express, and MongoDB, building secure RESTful APIs with JWT authentication and real-time data aggregation for a unified performance dashboard.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2025 - Oct 2025",
  },
  {
    title: "Software Developer Intern",
    location: "Collab Vision Infosolutions, Kolhapur",
    description:
      "Developed and contributed to real-world Web and Android applications, implementing features, integrating APIs, and improving applications performance, reliability, and user experience.",
    icon: React.createElement(FaReact),
    date: "Jun 2025 - Aug 2025",
  },

] as const;

export const projectsData = [

  {
    title: "SkillPulse.ai",
    description: "Architected a multi-agent career development platform using LangChain and LangGraph — featuring Role-Aligned Resume Auditing & Skill-Gap Analysis, AI Mock Interviews, and Adaptive Skill Mastery Agent for end-to-end career growth. Built a gamified learning dashboard serving 20+ AI-generated roadmaps via GraphQL APIs, where users progress through XP, streak, goal tracking, contextual Q&A, and adaptive quiz tests, with learning plans persisted in PostgreSQL via Prisma ORM. Developed a streaming AI assistant with context-window management delivering sub-500ms average response time, enabling real-time concept explanations and session-aware Q&A within active learning sessions.",
    tags: ["Next.js", "PDF-Parser", "Groq", "LLM", "LangChain", "LangGraph", "Supabase", "Typescript"],
    imageUrl: skillpulse,
    link: "https://skills-pulse-ai-agent.vercel.app/",
    type: "web",
    githubUrl: "https://github.com/Ombhanuse27/SkillsPulse-AI-agent"
  },

  {
    title: "HealthShedule",
    description: "Built a multi-hospital appointment platform with AI calling automation, real-time scheduling, and RBAC. Integrated WebRTC + PeerJS for low-latency teleconsultation, along with a doctor dashboard and digital e-prescriptions.",
    tags: ["MERN Stack", "AI Calling Agent", "WebRTC", "PeerJS", "BrevoSDK", "Vercel", "Render", "Docker"],
    imageUrl: healthSchedule,
    link: "https://health-scheduling.vercel.app/",
    type: "web",
    githubUrl: "https://github.com/Ombhanuse27/HealthSchedule"
  },

  {
    title: "StudentGPT - AI Academic Assistant",
    description: "Built an AI chatbot for automating student queries (attendance, timetable, syllabus retrieval). Implemented RAG pipeline with PDF/DOCX parsing and LLM integration, enabling users to upload documents and receive accurate, context-aware responses.",
    tags: ["Next.js", "Typescript", "Groq API", "LLM", "RAG", "Pdf-parser", "MySQL", "Agentic AI"],
    imageUrl: chatbot,
    type: "web",
    link: "https://dypcet-chatbot.vercel.app/",
    githubUrl: "https://github.com/Ombhanuse27/DYPCET-Chatbot"
  },
  {
    title: "BlogVerse",
    description: "Developed an interactive blogging platform that enables users to publish content seamlessly, connect with other bloggers through real-time chat powered by WebSockets, and engage socially via likes, shares, saves, and follow features.",
    tags: ["MERN Stack", "Socket.io", "OAuth", "Vercel", "Render", "Docker"],
    imageUrl: blogVerse,
    link: "https://blog-site-azure-ten.vercel.app/",
    type: "web",
    githubUrl: "https://github.com/Ombhanuse27/BlogVerse"
  },

  {
    title: "DailyBasket",
    description:
      "Developed a grocery app for shopkeepers to manage inventory, track sales/revenue, and generate bills. Implemented role-based access for employees to manage products and billing.",
    tags: ["Flutter", "Dart", "Firebase", "Brevo"],
    imageUrl: DailyBasket,
    type: "mobile",
    link: "https://github.com/Ombhanuse27/daily_basket",
  },
  {
    title: "ShowHub",
    description:
      "Developed responsive and user-friendly movie ticket booking application where users can explore currently running movies, view showtimes, select seats, and book tickets and get downloadable ticket. Designed with real-world functionality and a smooth UI experience. ",
    tags: ["XML", "Java", "Android SDK", "Firebase"],
    imageUrl: ShowHub,
    type: "mobile",
    link: "https://github.com/Ombhanuse27/showwhub",
  },

] as const;


export const productsData = [
  {
    title: "ProSearch - AI-Powered Professional Search Engine ",
    description: "A Next-Gen Professional Networking & Job Search Platform Connecting talented professionals, innovative businesses, and skilled freelancers in one unified ecosystem.",
    tags: ["React.js", "Tailwind","TypeScript","RBAC","reCAPTCHA v3", "PostgreSQL", "Supabase"],
    imageUrl:prosearch, // Replace with your actual imported image variable
    link: "https://prosearch.co.in/", // Replace with actual live link
  },
  {
    title: "Pro Office - EMS System",
    description: "Pro EMS is a comprehensive Enterprise Management System designed to handle workforce tracking, attendance management, performance evaluation, and related administrative tasks.",
    tags: ["React.js","Tailwind","Framer Motion","PostgreSQL","Supabase",],
    imageUrl: proofice, // Replace with your actual imported image variable
    link: "https://www.prooffice.in", // Replace with actual live link
  },
  {
    title: "Prana Yoga Studio",
    description: "Prana Yoga Studio, offering a seamless experience for users to explore yoga services, book appointments, and subscribe to online packages.",
    tags: ["HTML5","CSS3","Javascript","Bootstrap","Node.js","Express","MongoDB"],
    imageUrl: pranayoga, // Replace with your actual imported image variable
    link: "https://www.pranayogastudio.in/", // Replace with actual live link
  },
  
  {
    title: "Pro Career Academy",
    description: "Career-focused education platform for PRO CAREER ACADEMY that drives student admissions through AI-integrated learning, strong results showcase, and lead generation",
    tags: ["React.js","Tailwind", "Node.js","Express", "MongoDB", "Socket.io"],
    imageUrl: proacademy, // Replace with your actual imported image variable
    link: "https://pro-career-academy.vercel.app/", // Replace with actual live link
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
  "Express",
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
  "AI",
  "Agentic AI",
  "LangChain",
  "LangGraph",
  "Python",
  "PHP",
  "Vercel",
  "Render",
  "CI/CD",
  "Docker",


] as const;
