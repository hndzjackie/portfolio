import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { Experience } from "../../../../typings";

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

export async function GET() {
  const experiences: Experience[] = await client.fetch(query);
  return new Response(JSON.stringify({ experiences }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
