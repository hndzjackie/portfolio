"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

const createFallbackImage = (rev: string): Project["image"] => ({
  _type: "image",
  asset: {
    _rev: rev,
    _type: "reference",
  },
});

const fallbackProjects: Project[] = [
  {
    _id: "showtime-checkin",
    _originalId: "showtime-checkin",
    _createdAt: "",
    _updatedAt: "",
    _rev: "",
    _type: "project",
    title: "Show-Time Check-In App Project",
    summary: "Design a pre-order app for Showtime check-ins • 2023",
    image: createFallbackImage("movieTimeImage"),
    linkToBuild: "",
    technologies: [
      {
        _id: "tech-figma-1",
        _originalId: "tech-figma-1",
        _createdAt: "",
        _updatedAt: "",
        _rev: "",
        _type: "technology",
        title: "Figma",
        image: createFallbackImage("figmaImage"),
      },
    ],
  },
  {
    _id: "art-auction",
    _originalId: "art-auction",
    _createdAt: "",
    _updatedAt: "",
    _rev: "",
    _type: "project",
    title: "Art Auction Project",
    summary: "Create an online art gallery auction experience • 2023",
    image: createFallbackImage("movieTimeImage"),
    linkToBuild: "",
    technologies: [
      {
        _id: "tech-figma-2",
        _originalId: "tech-figma-2",
        _createdAt: "",
        _updatedAt: "",
        _rev: "",
        _type: "technology",
        title: "Figma",
        image: createFallbackImage("figmaImage"),
      },
    ],
  },
  {
    _id: "figma-art-page",
    _originalId: "figma-art-page",
    _createdAt: "",
    _updatedAt: "",
    _rev: "",
    _type: "project",
    title: "My Figma-Designed Art Page",
    summary: "Artistic expression captured in pixels • 2024",
    image: createFallbackImage("JPolaroidArt"),
    linkToBuild: "",
    technologies: [
      {
        _id: "tech-figma-3",
        _originalId: "tech-figma-3",
        _createdAt: "",
        _updatedAt: "",
        _rev: "",
        _type: "technology",
        title: "Figma",
        image: createFallbackImage("figmaImage"),
      },
    ],
  },
  {
    _id: "chase-bank-redesign",
    _originalId: "chase-bank-redesign",
    _createdAt: "",
    _updatedAt: "",
    _rev: "",
    _type: "project",
    title: "Chase Bank Ultimate Rewards Redesign",
    summary: "Redesign Chase Ultimate Rewards Home Section on the mobile app • 2024",
    image: createFallbackImage("chaseImage"),
    linkToBuild: "",
    technologies: [
      {
        _id: "tech-figma-4",
        _originalId: "tech-figma-4",
        _createdAt: "",
        _updatedAt: "",
        _rev: "",
        _type: "technology",
        title: "Figma",
        image: createFallbackImage("figmaImage"),
      },
    ],
  },
];

function Projects({ projects }: Props) {
  const displayProjects = projects && projects.length > 0 ? projects : fallbackProjects;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 z-0"
    >
      <h3 className="text-center w-full uppercase tracking-[15px] sm:tracking-[20px] text-[#6589c0] text-xl sm:text-2xl mb-8 sm:mb-12 flex-shrink-0">
        Projects
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full z-20">
        {displayProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#6388bf]/10 left-0 h-[500px] -skew-y-12 pointer-events-none -z-10" />
    </motion.div>
  );
}

export default Projects;
