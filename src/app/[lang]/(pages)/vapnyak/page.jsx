import LimeStoneSection from "@/sections/limeStoneSection/LimeStoneSection";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

export async function generateMetadata({ params }) {
  const { lang } = await params;

    const {seoLimeStonePage} = await getDictionary(lang);
  
    const title = seoLimeStonePage.seoMetaMainTitle;
    const description = seoLimeStonePage.seoMetaMainDescription;
    const keywords = seoLimeStonePage.seoMetaKeywords;
    const titleOpenGraph = seoLimeStonePage.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = seoLimeStonePage.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}vapnyak`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}vapnyak`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/vapnyak`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}vapnyak`,
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

const LimeStonePage = async ({ params }) => {
  const { lang } = await params;
  const { limeStoneSection, buttons, seoLimeStonePage } = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);
      
        const name_01 = seoLimeStonePage.seoMetaNameJsonLd_1;
        const name_02 = seoLimeStonePage.seoMetaNameJsonLd_2;
      
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
                "@id": `${pageUrlJsonLd}vapnyak`,
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
      <LimeStoneSection
        lang={lang}
        dictionary={limeStoneSection}
        buttons={buttons}
      />
    </>
  );
};

export default LimeStonePage;
