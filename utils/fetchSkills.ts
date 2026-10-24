import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Skill } from "../typings";

const query = groq`*[_type == "skill"]`;

export const fetchSkills = async (): Promise<Skill[]> => {
  try {
    const skills: Skill[] = await client.fetch(query);
    return skills || [];
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
};
