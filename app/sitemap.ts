import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  }> = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/caso-epsa", priority: 0.9, changeFrequency: "monthly" },
    { path: "/demos", priority: 0.9, changeFrequency: "monthly" },
    { path: "/demos/thayari-consistencia", priority: 0.7, changeFrequency: "monthly" },
    { path: "/demos/el-abra-consistencia", priority: 0.7, changeFrequency: "monthly" },
    { path: "/analisis", priority: 0.8, changeFrequency: "monthly" },
    { path: "/analisis/etapas-seia", priority: 0.7, changeFrequency: "monthly" },
    { path: "/analisis/antofagasta-carga", priority: 0.7, changeFrequency: "monthly" },
    { path: "/analisis/organizaciones", priority: 0.7, changeFrequency: "monthly" },
    { path: "/analisis/responsables-estatales", priority: 0.7, changeFrequency: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${SITE.url}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
