"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
       
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#6589c0] text-2xl">
            About
        </h3>

        <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/avatars/selfPortraitPicture.jpg" 
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
         />
         
         <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is a{" "} 
                <span className="underline decoration-[#F7AB0A]/50">little</span>{" "} 
                background
            </h4>
            <p className="text-base">
            "As an artist with a keen interest in technology, I merge creativity and innovation for seamless user experiences—a fusion of pixels and passion, where design and technology harmoniously come together.As an artist with a keen interest in technology, I merge creativity and innovation for seamless user experiences—a fusion of pixels and passion, where design and technology harmoniously come together.As an artist with a keen interest in technology, I merge creativity and innovation for seamless user experiences—a fusion of pixels and passion, where design and technology harmoniously come together.As an artist with a keen interest in technology, I merge creativity and innovation for seamless user experiences—a fusion of pixels and passion, where design and technology harmoniously come together.As an artist with a keen interest in technology, I merge creativity and innovation for seamless user experiences—a fusion of pixels and passion, where design and technology harmoniously come together."
            </p>
         </div>
    </motion.div>
  );
}

// This format is correct do not change