import { createClient } from "@sanity/client";

export function getSanityClient() {
  return createClient({
    projectId: process.env.SANITY_PROJECT_ID!,
    dataset: process.env.SANITY_DATASET!,
    apiVersion: "2025-01-01",
    useCdn: false
  });
}
