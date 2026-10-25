"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill as SkillType } from "../typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
    directionLeft?: boolean;
    skill: SkillType;
};

function Skill({ skill, directionLeft }: Props) {
  const skillImg = urlFor(skill?.image).url() || "/avatars/figmaImage.png";

  return (
    <div className="group relative flex cursor-pointer">
        <motion.div
            initial={{
                x: directionLeft ? -25 : 25,
                opacity: 0,
            }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-full border border-[rgb(101,137,192)] overflow-hidden w-20 h-20 sm:w-24 sm:h-24 xl:w-28 xl:h-28 transition duration-300 ease-in-out relative flex-shrink-0"
        >
            <Image
                src={skillImg}
                alt={skill?.title || "Skill icon"}
                width={112}
                height={112}
                className="w-full h-full object-cover"
            />
        </motion.div>
    </div>
  )
}

export default Skill;
