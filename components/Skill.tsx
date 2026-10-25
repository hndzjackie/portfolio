"use client";

import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
    directionLeft?: boolean;
    skill: SkillType;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{
                x: directionLeft ? -25 : 25,
                opacity: 0,
            }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={urlFor(skill?.image).url()}
            className="rounded-full border border-[rgb(101,137,192)] object-cover w-20 h-20 sm:w-24 sm:h-24 xl:w-28 xl:h-28 transition duration-300 ease-in-out"
        />
    </div>
  )
}

export default Skill;
