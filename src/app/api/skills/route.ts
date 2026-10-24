import { fetchSkills } from "../../../../utils/fetchSkills";

export async function GET() {
  const skills = await fetchSkills();
  return Response.json({ skills });
}
