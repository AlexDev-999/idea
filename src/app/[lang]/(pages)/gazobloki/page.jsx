import GasBlocksSection from "@/sections/gasBlocksSection/GasBlocksSection";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";


export async function generateMetadata({ params }) {
  const { lang } = await params;

    const {seoGasBlocksPage} = await getDictionary(lang);
  
    const title = seoGasBlocksPage.seoMetaMainTitle;
    const description = seoGasBlocksPage.seoMetaMainDescription;
    const keywords = seoGasBlocksPage.seoMetaKeywords;
    const titleOpenGraph = seoGasBlocksPage.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = seoGasBlocksPage.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}gazobloki`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}gazobloki`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/gazobloki`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}gazobloki`,
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

const GasBlocksPage = async ({ params }) => {
  const { lang } = await params;
  const { gasBlocksSection, buttons, seoGasBlocksPage } = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);
  
    const name_01 = seoGasBlocksPage.seoMetaNameJsonLd_1;
    const name_02 = seoGasBlocksPage.seoMetaNameJsonLd_2;
  
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
            "@id": `${pageUrlJsonLd}gazobloki`,
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
      <GasBlocksSection
        lang={lang}
        dictionary={gasBlocksSection}
        buttons={buttons}
      />
    </>
  );
};

export default GasBlocksPage;
