"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  experience: Experience;
};

function formatExperienceDate(dateStarted?: string, dateEnded?: string, isCurrent?: boolean): string {
  const format = (dateStr?: string) => {
    if (!dateStr) return "";
    if (/^[A-Za-z]+ \d{4}$/.test(dateStr.trim())) return dateStr.trim();
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
  };

  const start = format(dateStarted);
  const end = isCurrent ? "Present" : format(dateEnded);

  if (start && end) return `${start} - ${end}`;
  if (start) return start;
  return "";
}

export default function ExperienceCard({ experience }: Props) {
  const companyImg = urlFor(experience?.companyImage).url() || "/avatars/logo.png";

  const dateText = formatExperienceDate(
    experience?.dateStarted,
    experience?.dateEnded,
    experience?.isCurrentlyWorkingHere
  );

  const getFormattedTitle = () => {
    let role = experience?.jobTitle?.trim() || "";
    let company = experience?.company?.trim() || "";

    // If jobTitle still contains "| Company", clean it up and capture the company if not already set
    if (role.includes("|")) {
      const parts = role.split("|").map((s) => s.trim());
      role = parts[0] || role;
      if (!company && parts[1]) {
        company = parts[1];
      }
    }

    // Default company for JusTravel if company field was left empty in Sanity
    if (!company && role.toLowerCase().includes("ux designer & researcher")) {
      company = "JusTravel";
    }

    if (role && company) {
      return (
        <>
          {role} <span className="font-semibold text-[#123568]">|</span> {company}
        </>
      );
    }

    return role || company;
  };

  const isPetCare =
    experience?.jobTitle?.toLowerCase().includes("pet care") ||
    experience?.company?.toLowerCase().includes("rover");
  const technologies = isPetCare ? [] : experience?.technologies;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex items-start space-x-6 sm:space-x-8 group"
    >
      {/* Left side: Circular Icon Badge */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-md flex items-center justify-center p-2.5 sm:p-3 border border-slate-100 overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <Image
            src={companyImg}
            alt={experience?.company || experience?.jobTitle || "Company"}
            width={80}
            height={80}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Right side: Experience Details */}
      <div className="flex-1 pt-1 sm:pt-2 space-y-1 sm:space-y-1.5 text-left">
        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#123568] tracking-tight">
          {getFormattedTitle()}
        </h4>

        <div className="flex flex-wrap items-center gap-2 text-slate-500 text-sm sm:text-base font-medium">
          <span>{dateText}</span>
          {technologies && technologies.length > 0 && (
            <>
              <span className="text-slate-400">·</span>
              <div className="flex items-center space-x-1.5">
                {technologies.map((technology) => {
                  const techImg = urlFor(technology?.image).url() || "/avatars/logo.png";
                  return (
                    <Image
                      key={technology._id || technology.title}
                      src={techImg}
                      alt={technology.title || "Technology"}
                      width={22}
                      height={22}
                      className="w-5 h-5 sm:w-5.5 sm:h-5.5 object-contain rounded-sm"
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>

        <div className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl pt-1">
          {experience?.points?.map((point, i) => (
            <p key={i} className={i > 0 ? "mt-2" : ""}>
              {point}
            </p>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
