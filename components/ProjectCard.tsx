"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  let projectImg = "/avatars/movieTimeImage.png";
  try {
    const sanityUrl = urlFor(project?.image).url();
    if (sanityUrl) {
      projectImg = sanityUrl;
    } else if (project?.title?.toLowerCase().includes("chase")) {
      projectImg = "/avatars/chaseImage.png";
    } else if (project?.title?.toLowerCase().includes("art")) {
      projectImg = "/avatars/JPolaroidArt.png";
    } else {
      projectImg = "/avatars/movieTimeImage.png";
    }
  } catch {
    if (project?.title?.toLowerCase().includes("chase")) {
      projectImg = "/avatars/chaseImage.png";
    } else if (project?.title?.toLowerCase().includes("art")) {
      projectImg = "/avatars/JPolaroidArt.png";
    } else {
      projectImg = "/avatars/movieTimeImage.png";
    }
  }

  // Remove "Case Study X of Y:" prefix if present
  const cleanTitle = project?.title?.replace(/^Case Study \d+ of \d+:\s*/i, "") || "Project";

  const cardContent = (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row items-center rounded-2xl sm:rounded-3xl bg-[#F6F8FD] p-6 sm:p-8
      shadow-sm hover:shadow-md transition-all duration-300 w-full overflow-hidden gap-6 h-full border border-slate-100 group"
    >
      {/* Left side: Image */}
      <div className="w-full sm:w-1/2 flex items-center justify-center flex-shrink-0">
        <Image
          src={projectImg}
          alt={cleanTitle}
          width={360}
          height={240}
          className="w-auto max-w-[200px] sm:max-w-full max-h-40 sm:max-h-48 md:max-h-52 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Right side: Information */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center space-y-2.5 sm:space-y-3.5 text-center sm:text-left">
        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#123568] tracking-tight group-hover:underline group-hover:decoration-[#123568] underline-offset-4 transition-all">
          {cleanTitle}
        </h4>

        {project?.technologies && project.technologies.length > 0 && (
          <div className="flex items-center justify-center sm:justify-start space-x-2 my-1">
            {project.technologies.map((technology) => {
              let techImg = "/avatars/figmaImage.png";
              try {
                const imgUrl = urlFor(technology?.image).url();
                if (imgUrl) {
                  techImg = imgUrl;
                } else if (technology?.title?.toLowerCase().includes("figma")) {
                  techImg = "/avatars/figmaImage.png";
                } else {
                  techImg = "/avatars/logo.png";
                }
              } catch {
                techImg = "/avatars/figmaImage.png";
              }

              return (
                <Image
                  key={technology._id || technology.title}
                  src={techImg}
                  alt={technology.title || "Technology"}
                  width={32}
                  height={32}
                  className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                />
              );
            })}
          </div>
        )}

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          {project?.summary}
        </p>
      </div>
    </motion.article>
  );

  if (project?.linkToBuild) {
    return (
      <Link
        href={project.linkToBuild}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full cursor-pointer"
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

