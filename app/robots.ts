import type { MetadataRoute } from "next"

const baseUrl = "https://dexmini.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/api/", "/private/", "/_next/", "/*.json$", "/*.xml$"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

