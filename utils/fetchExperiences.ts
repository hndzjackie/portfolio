import { Experience } from "../typings";


export const fetchExperiences =  async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/experience`);

  const data = await res.json();
  const expeirences: Experience[] = data.expeirences;

  return expeirences;
}