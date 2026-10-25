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
      className="min-h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-4 sm:px-10 justify-center mx-auto items-center py-24 md:py-0"
    >
      <h3 className="absolute top-20 sm:top-24 uppercase tracking-[10px] sm:tracking-[20px] text-[rgb(101,137,192)] text-xl sm:text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-4 sm:p-8 snap-x snap-mandatory
      scrollbar scrollbar-track-white scrollbar-thumb-[#2251b2] mt-12 sm:mt-10 md:mt-0">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience}/>
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience