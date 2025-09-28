"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi! My name is Jackie.",
            "I'm a UX Designer with a passion for minimalist design.",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (

    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        {/* <BackgroundCircles /> */}
        <img
            className="relative rounded-full h-72 w-72 mx-auto object-cover"
            src="/avatars/selfPortrait.jpg"
            alt="SelfPortrait.jpg"
        />
        <div className="z-20">
            <h2 className="text-sm uppercase text-[rgb(101,137,192)] pb-2 tracking-[15px]">
                UX Designer
            </h2>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#f7AB0A" />
            </h1>

            <div className="pt-5">
                <Link href="#about" className="px-2">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience" className="px-2">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills" className="px-2">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects" className="px-2">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
