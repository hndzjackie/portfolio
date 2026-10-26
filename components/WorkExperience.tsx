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
      className="min-h-screen flex flex-col items-center justify-center py-20 md:py-24 max-w-full px-4 sm:px-10 mx-auto overflow-hidden"
    >
      <h3 className="text-center w-full uppercase tracking-[15px] sm:tracking-[20px] text-[rgb(101,137,192)] text-xl sm:text-2xl mb-8 sm:mb-12 flex-shrink-0">
        Experience
      </h3>

      <div className="w-full flex space-x-6 overflow-x-scroll p-4 sm:p-6 snap-x snap-mandatory scrollbar scrollbar-track-white scrollbar-thumb-[#2251b2] flex-1 items-center">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience}/>
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience