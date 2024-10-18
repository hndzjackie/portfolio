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
            src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"
            className="rounded-full border-[#F7AB0A] object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="rounded-full absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[rgb(18,53,104)] h-24 w-24 xl:w-32 xl:h-32">
            <div className="flex items-center justify-center h-full">
                <p className="text-3xl font-bold text-[#F7AB0A]">100%</p>
            </div>    
        </div>
    </div>
  )
}

export default Skill;

{/* Figure out how to change group-hover:[#F6F8FD] to bluescale */}  
{/* border-[#F7AB0A] not rendering  */} 