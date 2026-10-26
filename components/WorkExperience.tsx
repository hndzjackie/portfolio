"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

const createFallbackImage = (rev: string): Experience["companyImage"] => ({
  _type: "image",
  asset: {
    _rev: rev,
    _type: "reference",
  },
});

const fallbackExperiences: Experience[] = [
  {
    _id: "rover-experience",
    _originalId: "rover-experience",
    _createdAt: "",
    _updatedAt: "",
    _rev: "",
    _type: "experience",
    jobTitle: "Independent Pet Care Provider",
    company: "Rover",
    dateStarted: "July 2025",
    dateEnded: "",
    isCurrentlyWorkingHere: true,
    companyImage: createFallbackImage("logo"),
    points: [
      "Manage complex scheduling, logistics, and daily operations while maintaining clear, empathetic communication with diverse clients to ensure trust.",
    ],
    technologies: [],
  },
  {
    _id: "justravel-experience",
    _originalId: "justravel-experience",
    _createdAt: "",
    _updatedAt: "",
    _rev: "",
    _type: "experience",
    jobTitle: "UX Designer & Researcher",
    company: "JusTravel",
    dateStarted: "February 2024",
    dateEnded: "August 2024",
    isCurrentlyWorkingHere: false,
    companyImage: createFallbackImage("justravel"),
    points: [
      "Led foundational user research and end-to-end Figma prototyping, translating usability studies into accessible, WCAG-compliant interfaces.",
    ],
    technologies: [
      {
        _id: "tech-figma",
        _originalId: "tech-figma",
        _createdAt: "",
        _updatedAt: "",
        _rev: "",
        _type: "technology",
        title: "Figma",
        image: createFallbackImage("figma"),
      },
      {
        _id: "tech-procreate",
        _originalId: "tech-procreate",
        _createdAt: "",
        _updatedAt: "",
        _rev: "",
        _type: "technology",
        title: "Procreate",
        image: createFallbackImage("procreate"),
      },
    ],
  },
  {
    _id: "chase-experience",
    _originalId: "chase-experience",
    _createdAt: "",
    _updatedAt: "",
    _rev: "",
    _type: "experience",
    jobTitle: "Associate Banker",
    company: "Chase Bank",
    dateStarted: "October 2021",
    dateEnded: "August 2022",
    isCurrentlyWorkingHere: false,
    companyImage: createFallbackImage("chase"),
    points: [
      "Facilitated exceptional customer experiences by delivering tailored financial solutions and proactively addressing diverse client needs.",
    ],
    technologies: [],
  },
];

function WorkExperience({ experiences }: Props) {
  // If experiences from Sanity contains outdated records (such as wedding website or lacks Rover/Chase), use the redesign experiences
  const isOutdatedSanityData =
    !experiences ||
    experiences.length === 0 ||
    experiences.some((exp) => exp.company?.toLowerCase().includes("wedding")) ||
    !experiences.some((exp) => exp.company?.toLowerCase().includes("rover"));

  const displayExperiences = isOutdatedSanityData ? fallbackExperiences : experiences;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col items-center justify-center py-20 md:py-24 max-w-4xl px-6 sm:px-10 mx-auto relative z-0"
    >
      <h3 className="text-center w-full uppercase tracking-[15px] sm:tracking-[20px] text-[rgb(101,137,192)] text-xl sm:text-2xl mb-12 sm:mb-16 flex-shrink-0">
        Experience
      </h3>

      <div className="relative w-full space-y-12 sm:space-y-16">
        {/* Continuous vertical timeline connector line between icons */}
        <div className="absolute left-[31px] sm:left-[39px] top-8 bottom-8 w-[2px] bg-slate-200" />

        {displayExperiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
