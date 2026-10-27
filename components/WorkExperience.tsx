"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
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

        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
