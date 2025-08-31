import HomeHeroSection from "@/sections/homeHeroSection/HomeHeroSection";
import HomeProductsSection from "@/sections/homeProductsSection/HomeProductsSection";
import HomePartnersSection from "@/sections/homePartnersSection/HomePartnersSection";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const {seoMainPage} = await getDictionary(lang);

  const title = seoMainPage.seoMetaMainTitle;
  const description = seoMainPage.seoMetaMainDescription;
  const keywords = seoMainPage.seoMetaKeywords;
  const titleOpenGraph = seoMainPage.seoMetaTitleOpenGraph;
  const descriptionOpenGraph = seoMainPage.seoMetaDescriptionOpenGraph;
  const seoMetaPageUrl = getSeoMetaPageUrl(lang);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}`,
      description: descriptionOpenGraph,
      siteName: "mppidea",
      type: "website",
      images: [
        {
          url: "seo_images/opengraph-image-400x300.png",
          type: "image/png",
          width: 400,
          height: 300,
          alt: "МПП Ідея",
        },
        {
          url: "seo_images/twitter-image-800x600.png",
          type: "image/png",
          width: 800,
          height: 600,
          alt: "МПП Ідея",
        },
        {
          url: "seo_images/opengraph-image-1200-630.png",
          type: "image/png",
          width: 1200,
          height: 630,
          alt: "МПП Ідея",
        },
      ],
      locale: lang,
    },
  };
}

export default async function Home({ params }) {
  const {lang} = await params;

  const {seoMainPage} = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);

  const name_01 = seoMainPage.seoMetaNameJsonLd_1;

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": pageUrlJsonLd,
        name: name_01,
      },
    },
  };

  const {
    homeHeroSection,
    homeProductsSection,
    homePartnersSection,
  } = await getDictionary(lang);

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHeroSection lang={lang} dictionary={homeHeroSection} />
      <HomeProductsSection lang={lang} dictionary={homeProductsSection} />
      <HomePartnersSection lang={lang} dictionary={homePartnersSection} />
    </>
  );
}
