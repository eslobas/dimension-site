import type { MetadataRoute } from "next";

const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dimension.pt";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site, changeFrequency: "monthly", priority: 1 }];
}
