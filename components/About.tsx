"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "../typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
    pageInfo: PageInfo;
}

export default function About({ pageInfo }: Props) {
  const profilePicUrl = urlFor(pageInfo?.profilePic).url() || "/avatars/selfPortraitPicture.jpg";

  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-6 sm:px-10 justify-evenly mx-auto items-center py-24 md:py-0">

        <h3 className="absolute top-20 sm:top-24 uppercase tracking-[10px] sm:tracking-[20px] text-[#6589c0] text-xl sm:text-2xl">
            About
        </h3>

        <motion.div
            initial={{
                x: -100,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-0 -mb-16 md:mb-0 flex-shrink-0 w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] relative"
        >
            <Image
                src={profilePicUrl}
                alt={pageInfo?.name || "Profile picture"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 224px, (max-width: 1280px) 256px, 500px"
            />
        </motion.div>

         <div className="space-y-6 sm:space-y-10 px-0 md:px-10 mt-20 md:mt-0 max-w-3xl">
            <h4 className="text-2xl sm:text-4xl font-semibold">
                Here is a{" "}
                <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
                background
            </h4>
            <p className="text-sm sm:text-base">
                {pageInfo?.backgroundInformation}
            </p>
         </div>
    </motion.div>
  );
}

// This format is correct do not change