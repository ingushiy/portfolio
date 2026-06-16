import type { MetadataRoute } from "next";

const BASE_URL = "https://webdevst-ing.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date("2025-06-17"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date("2025-06-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contacts`,
      lastModified: new Date("2025-06-17"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
