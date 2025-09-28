import { groq } from "next-sanity";
import { client } from "../../../../src/sanity/lib/client";
import { Social } from "../../../../typings";

const query = groq`*[_type == "social"]`;

export async function GET() {
  const socials: Social[] = await client.fetch(query);
  return new Response(JSON.stringify({ socials }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
