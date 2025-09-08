// src/app/sitemap-uk.xml/route.js
export const runtime = "nodejs";

const base = (process.env.NEXT_PUBLIC_SEO_URL || "https://example.com").replace(/\/$/, "") + "/";

const pages = [
  { href: "", lastModified: "2025-09-05", priority: 1.0, changefreq: "daily" },

  { href: "pro-nas", lastModified: "2025-09-05", priority: 0.8, changefreq: "monthly" },
  { href: "faq", lastModified: "2025-09-05", priority: 0.8, changefreq: "monthly" },
  { href: "sertifikati", lastModified: "2025-09-05", priority: 0.6, changefreq: "monthly" },

  { href: "vapno", lastModified: "2025-09-05", priority: 0.9, changefreq: "monthly" },
  { href: "vapnyak", lastModified: "2025-09-05", priority: 0.9, changefreq: "monthly" },
  { href: "bilij-czement", lastModified: "2025-09-05", priority: 0.9, changefreq: "monthly" },
  { href: "gazobloki", lastModified: "2025-09-05", priority: 0.9, changefreq: "monthly" },
  { href: "marmurova-krikhta", lastModified: "2025-09-05", priority: 0.9, changefreq: "monthly" },
  { href: "plitka-teraczo", lastModified: "2025-09-05", priority: 0.9, changefreq: "monthly" },
  { href: "skhodi", lastModified: "2025-09-05", priority: 0.9, changefreq: "monthly" },
  { href: "dekorativnij-kamin", lastModified: "2025-09-05", priority: 0.9, changefreq: "monthly" },
  { href: "tovari-dlya-sadu", lastModified: "2025-09-05", priority: 0.9, changefreq: "monthly" },

  { href: "dekorativnij-kamin/rebbles", lastModified: "2025-09-05", priority: 0.8, changefreq: "monthly" },
  { href: "dekorativnij-kamin/terrazzo-crumb", lastModified: "2025-09-05", priority: 0.8, changefreq: "monthly" },

  { href: "tovari-dlya-sadu/terrazzo-circles", lastModified: "2025-09-05", priority: 0.8, changefreq: "monthly" },
  { href: "tovari-dlya-sadu/concrete-circles", lastModified: "2025-09-05", priority: 0.8, changefreq: "monthly" },
  { href: "tovari-dlya-sadu/concrete-garden-steps", lastModified: "2025-09-05", priority: 0.8, changefreq: "monthly" },

  { href: "plitka-teraczo/tereza", lastModified: "2025-09-05", priority: 0.85, changefreq: "monthly" },
  { href: "plitka-teraczo/margita", lastModified: "2025-09-05", priority: 0.85, changefreq: "monthly" },
  { href: "plitka-teraczo/radka", lastModified: "2025-09-05", priority: 0.85, changefreq: "monthly" },
  { href: "plitka-teraczo/xena", lastModified: "2025-09-05", priority: 0.85, changefreq: "monthly" },
  { href: "plitka-teraczo/ornela", lastModified: "2025-09-05", priority: 0.85, changefreq: "monthly" },
  { href: "plitka-teraczo/flooring-strips", lastModified: "2025-09-05", priority: 0.8, changefreq: "monthly" },
  { href: "plitka-teraczo/beatrix", lastModified: "2025-09-05", priority: 0.8, changefreq: "monthly" },
  { href: "plitka-teraczo/beatrix-large", lastModified: "2025-09-05", priority: 0.8, changefreq: "monthly" },
  { href: "plitka-teraczo/wall-strips", lastModified: "2025-09-05", priority: 0.8, changefreq: "monthly" },
];

function esc(s = "") {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function GET() {
  const urls = pages
    .map((p) => {
      const loc = p.href ? `${base}${p.href}` : base;
      const lastmod = p.lastModified ? `<lastmod>${esc(p.lastModified)}</lastmod>` : "";
      const priority = typeof p.priority !== "undefined" ? `<priority>${p.priority}</priority>` : "";
      const changefreq = p.changefreq ? `<changefreq>${esc(p.changefreq)}</changefreq>` : "";
      return `  <url>
    <loc>${esc(loc)}</loc>
    ${lastmod}
    ${changefreq}
    ${priority}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
