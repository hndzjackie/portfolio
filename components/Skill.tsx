"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="/avatars/figmaImage.png"
            className="rounded-full border border-[rgb(101,137,192)] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="rounded-full absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out border border-[#F7AB0A] group-hover:bg-[#F6F8FD] h-24 w-24 xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-black text-[#B37508]">100%</p>
            </div>    
        </div>
    </div>
  )
}

export default Skill;
