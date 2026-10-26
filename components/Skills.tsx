"use client";

import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
    skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col items-center justify-center py-20 md:py-24 max-w-7xl px-4 sm:px-10 mx-auto"
    >
      <div className="flex flex-col items-center text-center w-full mb-8 sm:mb-12 flex-shrink-0">
        <h3 className="uppercase tracking-[15px] sm:tracking-[20px] text-[#6589c0] text-xl sm:text-2xl mb-2 sm:mb-3">
          Skills
        </h3>
        <p className="uppercase tracking-[2px] sm:tracking-[3px] text-[#6589c0] text-xs sm:text-sm px-4">
          Hover over a skill for current proficiency
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-5">
        {skills?.slice(0, Math.ceil((skills?.length || 0) / 2)).map((skill) => (
          <Skill key={skill._id} skill={skill}/>
        ))}
        {skills?.slice(Math.ceil((skills?.length || 0) / 2)).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft/>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills