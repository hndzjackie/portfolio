import { fetchSocials } from "../../../../utils/fetchSocials";

export async function GET() {
  const socials = await fetchSocials();
  return Response.json({ socials });
}
