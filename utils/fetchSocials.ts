import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Social } from "../typings";

const query = groq`*[_type == "social"]`;

export const fetchSocials = async (): Promise<Social[]> => {
  try {
    const socials: Social[] = await client.fetch(query);
    return socials || [];
  } catch (error) {
    console.error("Error fetching socials:", error);
    return [];
  }
};
