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
        className="min-h-screen relative flex flex-col justify-center items-center max-w-full mx-auto overflow-hidden z-0 py-20 md:py-24">
        <h3 className="text-center w-full uppercase tracking-[15px] sm:tracking-[20px] text-[#6589c0] text-xl sm:text-2xl mb-4 sm:mb-8 flex-shrink-0">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#2251b2] flex-1 items-center">
            {projects?.map((project, i) => {
                const projectImg = urlFor(project?.image).url() || "/avatars/movieTimeImage.png";
                return (
                <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-4 sm:space-y-6
                items-center justify-center p-4 sm:p-8 md:p-12">
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
                            className="w-48 sm:w-72 md:w-80 max-h-48 sm:max-h-60 md:max-h-72 object-contain"
                        />
                    </motion.div>

                    <div className="space-y-4 sm:space-y-6 px-0 md:px-10 max-w-5xl">
                        <h4 className="text-xl sm:text-3xl font-semibold text-center px-2">
                            <span className="underline decoration-[#F7AB0A]">Case Study {i+1} of {projects?.length || 1}:</span>{" "}
                            {project?.title}
                        </h4>
                        <div className="flex items-center space-x-2 justify-center">
                            {project?.technologies?.map((technology) => {
                                const techImg = urlFor(technology?.image).url() || "/avatars/logo.png";
                                return (
                                <Image
                                    className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                                    key={technology._id}
                                    src={techImg}
                                    alt={technology.title || "Technology"}
                                    width={36}
                                    height={36}
                                />
                                );
                            })}
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-center md:text-left max-w-2xl mx-auto px-4 leading-relaxed">
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