import DecorativeStoneSection from "@/sections/decorativeStoneSection/DecorativeStoneSection";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

export async function generateMetadata({ params }) {
  const { lang } = await params;

    const {seoDecorativeStonePage} = await getDictionary(lang);
  
    const title = seoDecorativeStonePage.seoMetaMainTitle;
    const description = seoDecorativeStonePage.seoMetaMainDescription;
    const keywords = seoDecorativeStonePage.seoMetaKeywords;
    const titleOpenGraph = seoDecorativeStonePage.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = seoDecorativeStonePage.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}dekorativnij-kamin`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}dekorativnij-kamin`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/dekorativnij-kamin`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}dekorativnij-kamin`,
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

const DecorativeStonePage = async ({ params }) => {
  const { lang } = await params;
  const { decorativeStoneSection, buttons, seoDecorativeStonePage } = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);
      
        const name_01 = seoDecorativeStonePage.seoMetaNameJsonLd_1;
        const name_02 = seoDecorativeStonePage.seoMetaNameJsonLd_2;
      
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
                "@id": `${pageUrlJsonLd}dekorativnij-kamin`,
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
      <DecorativeStoneSection lang={lang} dictionary={decorativeStoneSection} buttons={buttons} />
    </>
  );
};

export default DecorativeStonePage;
