import TerrazzoTilesSection from "@/sections/terrazzoTilesSection/TerrazzoTilesSection";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

export async function generateMetadata({ params }) {
  const { lang } = await params;

    const {seoTerrazzoTilesPage} = await getDictionary(lang);
  
    const title = seoTerrazzoTilesPage.seoMetaMainTitle;
    const description = seoTerrazzoTilesPage.seoMetaMainDescription;
    const keywords = seoTerrazzoTilesPage.seoMetaKeywords;
    const titleOpenGraph = seoTerrazzoTilesPage.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = seoTerrazzoTilesPage.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}plitka-teraczo`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}plitka-teraczo`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/plitka-teraczo`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}plitka-teraczo`,
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

const TerrazzoTilesPage = async ({ params }) => {
  const { lang } = await params;
  const { terrazzoTilesSection, buttons, seoTerrazzoTilesPage } = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);
      
        const name_01 = seoTerrazzoTilesPage.seoMetaNameJsonLd_1;
        const name_02 = seoTerrazzoTilesPage.seoMetaNameJsonLd_2;
      
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
                "@id": `${pageUrlJsonLd}plitka-teraczo`,
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
      <TerrazzoTilesSection lang={lang} dictionary={terrazzoTilesSection} buttons={buttons} />
    </>
  );
};

export default TerrazzoTilesPage;
