"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "../typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 py-24 md:py-0">
        <h3 className="absolute top-20 sm:top-24 uppercase tracking-[10px] sm:tracking-[20px] text-[#6589c0] text-xl sm:text-2xl">
            Project
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2251b2] mt-10 md:mt-10">
            {projects?.map((project, i) => {
                const projectImg = urlFor(project?.image).url() || "/avatars/movieTimeImage.png";
                return (
                <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-6 sm:p-20 md:p-44 min-h-[600px] md:h-screen">
                    <motion.div
                        initial={{
                            y: -100,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0"
                    >
                        <Image
                            src={projectImg}
                            alt={project?.title || "Project image"}
                            width={400}
                            height={260}
                            className="w-48 sm:w-72 md:w-96 max-h-48 sm:max-h-64 object-contain"
                        />
                    </motion.div>

                    <div className="space-y-6 sm:space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-2xl sm:text-4xl font-semibold text-center px-2">
                            <span className="underline decoration-[#F7AB0A]">Case Study {i+1} of {projects?.length || 1}:</span>{" "}
                            {project?.title}
                        </h4>
                        <div className="flex items-center space-x-2 justify-center">
                            {project?.technologies?.map((technology) => {
                                const techImg = urlFor(technology?.image).url() || "/avatars/logo.png";
                                return (
                                <Image
                                    className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                                    key={technology._id}
                                    src={techImg}
                                    alt={technology.title || "Technology"}
                                    width={40}
                                    height={40}
                                />
                                );
                            })}
                        </div>
                        <p className="text-sm sm:text-lg text-center md:text-left max-w-2xl mx-auto px-4">
                            {project?.summary}
                        </p>
                    </div>
                </div>
                );
            })}
        </div>

        <div className="w-full absolute top-[30%] bg-[#6388bf]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects