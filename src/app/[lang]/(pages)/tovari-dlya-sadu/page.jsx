import GardenProductsSection from '@/sections/gardenProductsSection/GardenProductsSection';
import { getDictionary } from '@/helpers/getDictionary';
import { getSeoMetaPageUrl } from '@/helpers/getSeoMetaPageUrl';

export async function generateMetadata({ params }) {
  const { lang } = await params;

    const {seoGardenProductsPage} = await getDictionary(lang);
  
    const title = seoGardenProductsPage.seoMetaMainTitle;
    const description = seoGardenProductsPage.seoMetaMainDescription;
    const keywords = seoGardenProductsPage.seoMetaKeywords;
    const titleOpenGraph = seoGardenProductsPage.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = seoGardenProductsPage.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}tovari-dlya-sadu`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}tovari-dlya-sadu`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/tovari-dlya-sadu`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}tovari-dlya-sadu`,
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

const GardenProductsPage = async ({ params }) => {
  const { lang } = await params;
  const { gardenProductsSection, buttons, seoGardenProductsPage } = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);
    
      const name_01 = seoGardenProductsPage.seoMetaNameJsonLd_1;
      const name_02 = seoGardenProductsPage.seoMetaNameJsonLd_2;
    
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
              "@id": `${pageUrlJsonLd}tovari-dlya-sadu`,
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
      <GardenProductsSection
        lang={lang}
        dictionary={gardenProductsSection}
        buttons={buttons}
      />
    </>
  );
};

export default GardenProductsPage;
