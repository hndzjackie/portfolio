import { fetchProjects } from "../../../../utils/fetchProjects";

export async function GET() {
  const projects = await fetchProjects();
  return Response.json({ projects });
}
