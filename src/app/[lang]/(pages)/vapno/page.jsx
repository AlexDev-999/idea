import LimeSection from "@/sections/limeSection/LimeSection";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

export async function generateMetadata({ params }) {
  const { lang } = await params;

    const {seoLimePage} = await getDictionary(lang);
  
    const title = seoLimePage.seoMetaMainTitle;
    const description = seoLimePage.seoMetaMainDescription;
    const keywords = seoLimePage.seoMetaKeywords;
    const titleOpenGraph = seoLimePage.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = seoLimePage.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}vapno`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}vapno`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/vapno`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}vapno`,
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

const LimePage = async ({ params }) => {
  const { lang } = await params;
  const { limeSection, buttons, seoLimePage } = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);
    
      const name_01 = seoLimePage.seoMetaNameJsonLd_1;
      const name_02 = seoLimePage.seoMetaNameJsonLd_2;
    
      const jsonLd = {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": pageUrlJsonLd,
              name: name_01,
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": `${pageUrlJsonLd}vapno`,
              name: name_02,
            },
          },
        ],
      };

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LimeSection lang={lang} dictionary={limeSection} buttons={buttons} />
    </>
  );
};

export default LimePage;
