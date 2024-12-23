"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly max-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-[#6589c0] text-2xl">
            Project
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
        snap-mandatory z-20 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2251b2] md:mt-10">
            {projects.map((_, i) => (
                <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
                items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img 
                        initial={{ 
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="/avatars/movieTimeImage.png" 
                        alt="" 
                    />

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]">Case Study {i+1} of {projects.length}:</span>{" "}
                            Show-Time Check-In App
                        </h4>

                        <p className="text-lg text-center md:text-left">
                            Design a movie ticket pre-order app for showtime check-ins • 2023
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className="w-full absolute top:[30%] bg-[#6388bf]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects