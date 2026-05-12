import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/dekujeme", "/api/"] },
    sitemap: "https://nahradaosb.cz/sitemap.xml",
  };
}
