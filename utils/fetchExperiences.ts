import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Experience } from "../typings";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

export const fetchExperiences = async (): Promise<Experience[]> => {
  try {
    const experiences: Experience[] = await client.fetch(query);
    return experiences || [];
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return [];
  }
};
