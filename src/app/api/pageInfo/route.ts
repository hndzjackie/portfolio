import { groq } from "next-sanity";
import { client } from "../../../../src/sanity/lib/client";
import { Skill } from "../../../../typings";

const query = groq`*[_type == "skill"]`;

export async function GET() {
  const skills: Skill[] = await client.fetch(query);
  return new Response(JSON.stringify({ skills }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
