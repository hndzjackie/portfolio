import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { PageInfo } from "../typings";

const query = groq`*[_type == "pageInfo"][0]`;

export const fetchPageInfo = async (): Promise<PageInfo | null> => {
  try {
    const pageInfo: PageInfo = await client.fetch(query);
    return pageInfo || null;
  } catch (error) {
    console.error("Error fetching pageInfo:", error);
    return null;
  }
};
