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
      className="min-h-screen flex flex-col items-center justify-center py-20 md:py-24 max-w-7xl px-6 sm:px-10 mx-auto"
    >
      <h3 className="text-center w-full uppercase tracking-[15px] sm:tracking-[20px] text-[#6589c0] text-xl sm:text-2xl mb-8 md:mb-14 flex-shrink-0">
        About
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full flex-1">
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
          className="flex-shrink-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-96 xl:w-80 xl:h-[450px] max-h-[55vh] rounded-2xl overflow-hidden relative shadow-lg"
        >
          <Image
            src={profilePicUrl}
            alt={pageInfo?.name || "Profile picture"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 240px, (max-width: 1280px) 320px, 450px"
          />
        </motion.div>

        <div className="text-center md:text-left space-y-6 sm:space-y-8 max-w-2xl px-2 sm:px-4">
          <h4 className="text-2xl sm:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-sm sm:text-base leading-relaxed">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// This format is correct do not change