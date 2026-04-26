"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
   // Replace your existing <section ...> opening tag with this:
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-5xl mx-auto px-2 sm:px-4">
      <SectionHeading>My experience</SectionHeading>
      
      <VerticalTimeline lineColor={theme === "light" ? "#e2e8f0" : "rgba(255, 255, 255, 0.1)"}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="group"
              contentStyle={{
                background:
                  theme === "light" ? "rgba(255, 255, 255, 0.4)" : "rgba(15, 23, 42, 0.4)",
                boxShadow: theme === "light" ? "0 4px 20px rgba(0,0,0,0.05)" : "0 4px 20px rgba(255,255,255,0.02)",
                border: "1px solid",
                borderColor: theme === "light" ? "#e2e8f0" : "rgba(255, 255, 255, 0.1)",
                textAlign: "left",
                padding: "1.25rem", // Reduced from "1.5rem 2rem" to give text more horizontal space on mobile
                borderRadius: "1.5rem",
                backdropFilter: "blur(12px)",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #e2e8f0"
                    : "0.4rem solid rgba(255, 255, 255, 0.1)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "#0f172a",
                fontSize: "1.5rem",
                boxShadow: theme === "light" 
                  ? "0 0 0 4px #f1f5f9, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)" 
                  : "0 0 0 4px #1e293b, inset 0 2px 0 rgba(0,0,0,.4), 0 3px 0 4px rgba(0,0,0,.4)",
                color: "#6366f1" // Indigo icon color
              }}
            >
             <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                <h3 className="font-bold text-slate-900 dark:text-white capitalize text-xl md:text-2xl group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>
                <p className="font-mono text-indigo-600 dark:text-indigo-400 !mt-1 text-sm sm:text-base font-semibold">
                  {item.location}
                </p>
                <p className="!mt-3 !font-light text-slate-700 dark:text-slate-300 leading-relaxed sm:text-lg">
                  {item.description}
                </p>
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}