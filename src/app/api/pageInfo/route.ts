import { fetchPageInfo } from "../../../../utils/fetchPageInfo";

export async function GET() {
  const pageInfo = await fetchPageInfo();
  return Response.json({ pageInfo });
}
