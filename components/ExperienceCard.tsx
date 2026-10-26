import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
    experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  const companyImg = urlFor(experience?.companyImage).url() || "/avatars/logo.png";

  return (
    <article className="flex flex-col rounded-2xl items-center space-y-4 sm:space-y-6 flex-shrink-0
    w-[88vw] max-w-[450px] md:max-w-[550px] xl:max-w-[700px] snap-center bg-[#F6F8FD] p-6 sm:p-8 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden shadow-sm hover:shadow-md">
        <motion.div
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-20 h-20 sm:w-28 sm:h-28 xl:w-32 xl:h-32 rounded-full overflow-hidden flex-shrink-0 relative shadow-md"
        >
            <Image
                src={companyImg}
                alt={experience?.company || "Company Image"}
                width={128}
                height={128}
                className="w-full h-full object-cover object-center"
            />
        </motion.div>

        <div className="w-full px-0 sm:px-4 md:px-6">
            <h4 className="text-xl sm:text-3xl font-light">{experience?.company || "Company"}</h4>
            <p className="font-bold text-lg sm:text-xl mt-1">{experience?.jobTitle || "Role"}</p>
            <div className="flex space-x-2 my-2 overflow-x-auto py-1">
                {experience?.technologies?.map((technology) => {
                    const techImg = urlFor(technology?.image).url() || "/avatars/logo.png";
                    return (
                        <Image
                            key={technology._id}
                            className="h-8 w-8 sm:h-9 sm:w-9 rounded-full flex-shrink-0 object-cover"
                            src={techImg}
                            alt={technology.title || "Technology"}
                            width={36}
                            height={36}
                        />
                    );
                })}

            </div>
            <p className="uppercase py-2 sm:py-3 text-xs sm:text-sm text-[rgb(18,53,104)] font-medium">
                {experience?.dateStarted ? new Date(experience.dateStarted).toDateString() : ""} - {" "}
                {experience?.isCurrentlyWorkingHere ? "Present" : (experience?.dateEnded ? new Date(experience.dateEnded).toDateString() : "")}
            </p>

            <ul className="list-disc space-y-2 sm:space-y-3 ml-5 text-xs sm:text-sm md:text-base max-h-44 sm:max-h-56 xl:max-h-64 overflow-y-auto scrollbar-thin scrollbar-track-white
             scrollbar-thumb-[#2251b2] pr-2">
                {experience?.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  );
}
