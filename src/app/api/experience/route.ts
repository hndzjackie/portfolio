import { fetchExperiences } from "../../../../utils/fetchExperiences";

export async function GET() {
  const experiences = await fetchExperiences();
  return Response.json({ experiences });
}
