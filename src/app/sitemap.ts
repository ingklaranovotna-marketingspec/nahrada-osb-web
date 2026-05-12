import type { MetadataRoute } from "next";

const BASE = "https://nahradaosb.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return [
    { url: BASE,                                  lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/jsd-p5`,                      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/hsd-p7`,                      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/srovnani-osb-jsd-hsd`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/kalkulacka`,                  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/kde-koupit`,                  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`,                         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kontakt`,                     lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
  ];
}
