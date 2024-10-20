import React from "react";
import { motion } from "framer-motion";

type Props = {}

export default function ExperienceCard({}: Props) {
  return ( 
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#F6F8FD] p-10 hover:opacity-100 
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img 
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="/avatars/chaseImage.png" 
            alt="" 
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Chase Bank</h4>
            <p className="font-bold text-2xl mt-1">Rewards Home Page Redesign</p>
            <div className="flex space-x-2 my-2">
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="/avatars/figmaImage.png" 
                    alt="" />
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="/avatars/figmaImage.png" 
                    alt="" />
                <img 
                    className="h-10 w-10 rounded-full" 
                    src="/avatars/figmaImage.png" 
                    alt="" />

            </div>
            <p className="uppercase py-5 text-[rgb(18,53,104)]">Started work... - Ended...</p>
         
            <ul className="list-disc space-y-4 ml-5 text-lg"> 
                <li>Summary points Summary points Summary points Summary 
                    pointsSummary points
                </li>
                <li>Summary points Summary points Summary points Summary 
                    pointsSummary points
                </li>
                <li>Summary points Summary points Summary points Summary 
                    pointsSummary points
                </li>
                <li>Summary points Summary points Summary points Summary 
                    pointsSummary points
                </li>
                <li>Summary points Summary points Summary points Summary 
                    pointsSummary points
                </li>
            </ul>
        </div>
    </article>
  );
}