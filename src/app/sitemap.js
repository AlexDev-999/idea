// app/sitemap.js (Next.js)
export const dynamic = "force-static";

const ensureTrailingSlash = (u) => (u.endsWith("/") ? u : `${u}/`);
const stripLeadingSlash = (s) => (s.startsWith("/") ? s.slice(1) : s);

const baseUrlRaw = process.env.NEXT_PUBLIC_SEO_URL;
const baseUrl = ensureTrailingSlash(baseUrlRaw);

const seoPagesData = [
  // Головна
  { href: "", priority: 1.0, lastModified: "2025-09-05" },

  // Інформаційні сторінки
  { href: "pro-nas", priority: 0.8, lastModified: "2025-09-05" },
  { href: "faq", priority: 0.8, lastModified: "2025-09-05" },
  { href: "sertifikati", priority: 0.6, lastModified: "2025-09-05" },

  // Продукти (головні сторінки продуктів)
  { href: "vapno", priority: 0.9, lastModified: "2025-09-05" },
  { href: "vapnyak", priority: 0.9, lastModified: "2025-09-05" },
  { href: "bilij-czement", priority: 0.9, lastModified: "2025-09-05" },
  { href: "gazobloki", priority: 0.9, lastModified: "2025-09-05" },
  { href: "marmurova-krikhta", priority: 0.9, lastModified: "2025-09-05" },
  { href: "plitka-teraczo", priority: 0.9, lastModified: "2025-09-05" },
  { href: "skhodi", priority: 0.9, lastModified: "2025-09-05" },
  { href: "dekorativnij-kamin", priority: 0.9, lastModified: "2025-09-05" },
  { href: "tovari-dlya-sadu", priority: 0.9, lastModified: "2025-09-05" },

  // Декоративні камені — внутрішні сторінки
  { href: "dekorativnij-kamin/rebbles", priority: 0.8, lastModified: "2025-09-05" },
  { href: "dekorativnij-kamin/terrazzo-crumb", priority: 0.8, lastModified: "2025-09-05" },

  // Товари для саду — внутрішні сторінки
  { href: "tovari-dlya-sadu/terrazzo-circles", priority: 0.8, lastModified: "2025-09-05" },
  { href: "tovari-dlya-sadu/concrete-circles", priority: 0.8, lastModified: "2025-09-05" },
  { href: "tovari-dlya-sadu/concrete-garden-steps", priority: 0.8, lastModified: "2025-09-05" },

  // Плитка Терацо — внутрішні сторінки
  { href: "plitka-teraczo/tereza", priority: 0.85, lastModified: "2025-09-05" },
  { href: "plitka-teraczo/margita", priority: 0.85, lastModified: "2025-09-05" },
  { href: "plitka-teraczo/radka", priority: 0.85, lastModified: "2025-09-05" },
  { href: "plitka-teraczo/xena", priority: 0.85, lastModified: "2025-09-05" },
  { href: "plitka-teraczo/ornela", priority: 0.85, lastModified: "2025-09-05" },
  { href: "plitka-teraczo/flooring-strips", priority: 0.8, lastModified: "2025-09-05" },
  { href: "plitka-teraczo/beatrix", priority: 0.8, lastModified: "2025-09-05" },
  { href: "plitka-teraczo/beatrix-large", priority: 0.8, lastModified: "2025-09-05" },
  { href: "plitka-teraczo/wall-strips", priority: 0.8, lastModified: "2025-09-05" },
];


export default async function sitemap() {
  const routes = seoPagesData.map((route) => {
    const hrefClean = stripLeadingSlash(route.href || "");
    const url = hrefClean === "" ? baseUrl : `${baseUrl}${hrefClean}`;
    const enHref = hrefClean === "" ? `${baseUrl}en/` : `${baseUrl}en/${hrefClean}`;

    return {
      url,
      lastModified: route.lastModified,
      priority: route.priority,
      alternates: {
        languages: {
          uk: url,
          en: enHref,
        },
      },
    };
  });

  return routes;
}
