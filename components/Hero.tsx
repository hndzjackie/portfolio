"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";
import { PageInfo } from "../typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
    pageInfo: PageInfo;
}

export default function Hero({ pageInfo }: Props) {
    const [text] = useTypewriter({
        words: [
            `Hi! My name is ${pageInfo?.name || "Jacklyn"}.`,
            "I'm a UX Designer with a passion for minimalist design.",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    const heroImageUrl = urlFor(pageInfo?.heroImage).url() || "/avatars/selfPortrait.jpg";

    return (
    <div className="min-h-screen flex flex-col space-y-6 sm:space-y-8 items-center justify-center text-center overflow-hidden py-20 md:py-0">
        {/* <BackgroundCircles /> */}
        <Image
            className="relative rounded-full h-56 w-56 sm:h-72 sm:w-72 mx-auto object-cover"
            src={heroImageUrl}
            alt={pageInfo?.name || "Self Portrait"}
            width={288}
            height={288}
            priority
        />
        <div className="z-20">
            <h2 className="text-xs sm:text-sm uppercase text-[rgb(101,137,192)] pb-2 tracking-[8px] sm:tracking-[15px]">
                {pageInfo?.role}
            </h2>
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold px-4 sm:px-10 min-h-[64px] sm:min-h-[80px]">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#f7AB0A" />
            </h1>

            <div className="flex flex-wrap justify-center gap-2 pt-4 sm:pt-5 max-w-xs sm:max-w-none mx-auto">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
