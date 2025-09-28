import { groq } from "next-sanity";
import { client } from "../../../../src/sanity/lib/client";
import { Project } from "../../../../typings";

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`;
export async function GET() {
  const projects: Project[] = await client.fetch(query);
  return new Response(JSON.stringify({ projects }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
