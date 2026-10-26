"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

type Props = {
    socials: Social[];
};

export default function Header({ socials }: Props) {
  const filteredSocials = (socials || []).filter(
    (social) =>
      !social.url?.toLowerCase().includes("dribbble") &&
      !social.url?.toLowerCase().includes("dribble") &&
      !social.title?.toLowerCase().includes("dribbble") &&
      !social.title?.toLowerCase().includes("dribble")
  );

  const fallbackSocials: Social[] = [
    {
      _id: "linkedin",
      _originalId: "linkedin",
      _createdAt: "",
      _updatedAt: "",
      _rev: "",
      _type: "social",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/jacklyn-hernandez/",
    },
    {
      _id: "github",
      _originalId: "github",
      _createdAt: "",
      _updatedAt: "",
      _rev: "",
      _type: "social",
      title: "GitHub",
      url: "https://github.com/jacklyn-hndz",
    },
  ];

  const displaySocials = filteredSocials.length > 0 ? filteredSocials : fallbackSocials;

  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.8,
        }}
        transition={{
          duration: 1.2,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        className="flex flex-row items-center space-x-2 sm:space-x-3"
      >
        {/* Logo */}
        <Link href="#hero" className="flex items-center">
          <Image
            src="/avatars/logo.png"
            alt="Jackie Hernandez Logo"
            width={40}
            height={40}
            priority
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Social Icons */}
        {displaySocials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="#123568"
            bgColor="transparent"
            style={{ height: 42, width: 42 }}
            target="_blank"
            rel="noopener noreferrer"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 100,
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center space-x-4 sm:space-x-6 text-[#123568]"
      >
        {/* Resume Action Button */}
        <a
          href="https://drive.google.com/file/d/1mIiqMQeJ4NYi5NNOq9WeWCQbT5zobE_1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase text-xs sm:text-sm font-semibold tracking-wider text-[#123568] hover:text-[#2251b2] transition-colors"
        >
          Resume
        </a>

        {/* Get In Touch Action Button */}
        <Link
          href="#contact"
          className="border border-[#123568] rounded-full px-4 sm:px-5 py-2 flex items-center space-x-2 text-[#123568] hover:bg-[#123568] hover:text-white transition-all duration-300 group"
        >
          <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#123568] group-hover:text-white transition-colors" />
          <span className="uppercase text-xs sm:text-sm font-semibold tracking-wider">
            Get In Touch
          </span>
        </Link>
      </motion.div>
    </header>
  );
}
