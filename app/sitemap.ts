import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://organosilvia.com",
      lastModified: "2026-05-28",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
