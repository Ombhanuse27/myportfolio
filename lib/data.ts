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
    title: "Full Stack Intern",
    location: "IIT Bombay EdTech Society",
    description:
      "Worked on collaborative project for solving real world problem in EdTech domain under guidance of IIT Bombay mentors, with a strong focus on research-driven problem solving and implementation.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2025 - Oct 2025",
  },
  {
    title: "Software Trainee",
    location: "Collab Vision Infosolutions, Kolhapur",
    description:
    "Worked on web and app projects that can solve real world problems that helps me to improve my technical skills as well as problem solving skills by working with experienced peoples.",
    icon: React.createElement(FaReact),
    date: "Jul 2025 - Sept 2025",
  },
  {
    title: "Networking Intern",
    location: "Indradeep Information Technologies Pvt. Ltd.",
    description:"Learned basic networking tasks like crimping, File sharing in LAN, OS installation, CPU installing, IP Address configs etc. during my diploma.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 - Aug 2022",
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
    title: "DYPCET Chatbot",
    description:
      "Developed an interactive Agentic AI chatbot that intelligently answers user queries, supports document-based Q&A (PDF/Word uploads), and performs real-time academic tasks like attendance and timetable retrieval using AI agents, Groq-powered inference, and a high-performance Next.js stack.",
    tags: ["Next.js", "Typescript", "Groq API", "Pdf-parser","MySQL","Agentic AI"],
    imageUrl:chatbot,
    type:"web",
    link: "https://github.com/Ombhanuse27/DYPCET-Chatbot",
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
  "Redux",
  "Tailwind",
  "REST APIs",
  "MySQL",
  "Firebase",
  "Python",
  "PHP",
  "Vercel",
  "Render",
  "Docker",
  "Postman",

] as const;
