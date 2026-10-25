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
      className="min-h-screen flex relative flex-col text-center md:text-left
      xl:flex-row max-w-[2000px] px-4 xl:px-10 justify-center xl:space-y-0 mx-auto items-center py-28 md:py-0"
    >
        <h3 className="absolute top-20 sm:top-24 uppercase tracking-[10px] sm:tracking-[20px] text-[#6589c0] text-xl sm:text-2xl">
            Skills
        </h3>

        <h3 className="absolute top-32 sm:top-36 uppercase tracking-[2px] sm:tracking-[3px] text-[#6589c0] text-xs sm:text-sm px-4 text-center">
            Hover over a skill for current proficiency
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-5 mt-16 sm:mt-12 md:mt-0">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill}/>
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft/>
          ))}
        </div>
    </motion.div>
  )
}

export default Skills