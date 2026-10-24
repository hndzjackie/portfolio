import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { Project } from "../typings";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const projects: Project[] = await client.fetch(query);
    return projects || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
