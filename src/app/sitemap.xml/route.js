// src/app/sitemap.xml/route.js
export const runtime = "nodejs";

const base = (process.env.NEXT_PUBLIC_SEO_URL || "https://example.com").replace(/\/$/, "");

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${base}/sitemap-uk.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${base}/sitemap-en.xml</loc>
  </sitemap>
</sitemapindex>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
