"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
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
        {projects?.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#6388bf]/10 left-0 h-[500px] -skew-y-12 pointer-events-none -z-10" />
    </motion.div>
  );
}

export default Projects;
