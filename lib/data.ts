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
    description:"Built an AI-powered career coaching platform using multi-agent LLMs to generate personalized learning roadmaps, mock interviews, and resume skill-gap analysis. Developed a gamified learning dashboard with LangGraph workflows, GraphQL APIs, and PostgreSQL (Prisma). Created a streaming Neural Mentor AI assistant for real-time explanations, contextual Q&A, and adaptive quizzes to deliver an interactive learning experience.",
    tags: ["Next.js", "PDF-Parser", "Groq", "LLM","LangChain","LangGraph","Supabase" ,"Typescript"],
    imageUrl: skillpulse,
    link: "https://skills-pulse-ai-agent.vercel.app/",
    type:"web",
    githubUrl: "https://github.com/Ombhanuse27/SkillsPulse-AI-agent"
  },

  {
    title: "HealthShedule",
    description:"Built a multi-hospital appointment booking platform with AI calling automation, real-time scheduling, and RBAC for admin management of hospital profiles and workflows and Implemented WebRTC + PeerJS video teleconsultation, doctor dashboard, and digital e-prescriptions optimized for low-latency communication.",
    tags: ["MERN Stack", "AI Calling Agent", "WebRTC", "PeerJS","BrevoSDK","Vercel" ,"Render","Docker"],
    imageUrl: healthSchedule,
    link: "https://health-scheduling.vercel.app/",
    type:"web",
    githubUrl: "https://github.com/Ombhanuse27/HealthSchedule"
  },
  
  {
    title: "StudentGPT - AI Academic Assistant",
    description:
      "Built an AI-powered chatbot to automate students’ academic queries such as attendance, timetable and syllabus retrieval. Implemented a Retrieval-Augmented Generation (RAG) pipeline with PDF/DOCX document parsing and LLM integration to enable users to upload documents and receive AI-driven, context-aware responses.",
    tags: ["Next.js", "Typescript", "Groq API", "LLM", "RAG","Pdf-parser","MySQL","Agentic AI"],
    imageUrl:chatbot,
    type:"web",
    link: "https://dypcet-chatbot.vercel.app/",
    githubUrl: "  "
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
  "Python",
  "PHP",
  "Vercel",
  "Render",
  "CI/CD",
  "Docker",


] as const;
