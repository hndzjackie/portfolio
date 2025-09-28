export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION || "2025-09-27"
export const dataset = process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID || "z4xq8qn7";
export const useCdn = process.env.NODE_ENV == "production";
