"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
            initial={{
                x: -500, 
                opacity: 0,
                scale: 0.5,
            }}
            transition={{
                duration: 1.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1, 
            }}
            className="flex flex-row items-center ">
            <SocialIcon 
                url="https://www.linkedin.com/in/jacklyn-hernandez" 
                fgColor="#2251b2" 
                bgColor="transparent" 
            />
            <SocialIcon 
                url="https://dribbble.com/hndzjackie" 
                fgColor="#2251b2" 
                bgColor="transparent" 
            />
            <SocialIcon 
                url="https://github.com/hndzjackie" 
                fgColor="#2251b2" 
                bgColor="transparent"
            />
        </motion.div>

        <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1, 
            }}
            transition={{
                duration: 1.5
            }}
            className="flex flex-row items-center text-blue-400 cursor-pointer">
                <SocialIcon
                    href="#contact"
                    className="cursor-pointer"
                    network="email"
                    fgColor="#2251b2"
                    bgColor="transparent"
                />
                <a href="#contact">
                    <p className="uppercase hidden md:inline-flex text-sm text-[#2251b2]">
                        Get in touch
                    </p>
                </a>
        </motion.div>
    </header>
  )
}
