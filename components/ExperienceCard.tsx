import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
    experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[88vw] max-w-[500px] md:max-w-[600px] xl:max-w-[900px] snap-center bg-[#F6F8FD] p-6 sm:p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src={urlFor(experience?.companyImage).url()}
            alt={experience?.company || "Company Image"}
        />

        <div className="w-full px-0 sm:px-4 md:px-10">
            <h4 className="text-2xl sm:text-4xl font-light">{experience?.company || "Company"}</h4>
            <p className="font-bold text-xl sm:text-2xl mt-1">{experience?.jobTitle || "Role"}</p>
            <div className="flex space-x-2 my-2 overflow-x-auto py-1">
                {experience?.technologies?.map((technology) => (
                    <img
                        key={technology._id}
                        className="h-10 w-10 rounded-full flex-shrink-0"
                        src={urlFor(technology.image).url()}
                        alt={technology.title || ""} />
                ))}

            </div>
            <p className="uppercase py-3 sm:py-5 text-sm sm:text-base text-[rgb(18,53,104)]">
                {experience?.dateStarted ? new Date(experience.dateStarted).toDateString() : ""} - {" "}
                {experience?.isCurrentlyWorkingHere ? "Present" : (experience?.dateEnded ? new Date(experience.dateEnded).toDateString() : "")}
            </p>

            <ul className="list-disc space-y-3 sm:space-y-4 ml-5 text-sm sm:text-lg max-h-60 sm:max-h-80 xl:max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-white
             scrollbar-thumb-[#2251b2] pr-2">
                {experience?.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  );
}
