'use client';

import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
       
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[rgb(101,137,192)] text-2xl">
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
        src="data:image/jpeg;base64,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" 
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

// This formatt is correct do not change