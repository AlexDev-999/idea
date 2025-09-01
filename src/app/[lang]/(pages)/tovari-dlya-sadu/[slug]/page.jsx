import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";
import GardenProductsIdSection from "@/sections/GardenProductsIdSection/GardenProductsIdSection";

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const { gardenProductsSection } = await getDictionary(lang);

  const gardenProductsIdData = gardenProductsSection.productsData.find(
    (item) => item.slug === slug
  );
  
    const title = gardenProductsIdData.seoMetaMainTitle;
    const description = gardenProductsIdData.seoMetaMainDescription;
    const titleOpenGraph = gardenProductsIdData.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = gardenProductsIdData.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    alternates: {
      canonical: `${seoMetaPageUrl}tovari-dlya-sadu/${slug}`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}tovari-dlya-sadu/${slug}`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/tovari-dlya-sadu/${slug}`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}tovari-dlya-sadu/${slug}`,
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

const GardenProductsIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const { gardenProductsSection } = await getDictionary(lang);

  const gardenProductsIdData = gardenProductsSection.productsData.find(
    (item) => item.slug === slug
  );

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);
      
        const name_01 = gardenProductsIdData.seoMetaNameJsonLd_1;
        const name_02 = gardenProductsIdData.seoMetaNameJsonLd_2;
        const name_03 = gardenProductsIdData.seoMetaNameJsonLd_3;
      
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
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@id": `${pageUrlJsonLd}tovari-dlya-sadu/${slug}`,
                name: name_03,
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
      <GardenProductsIdSection
        lang={lang}
        dictionary={gardenProductsSection}
        data={gardenProductsIdData}
      />
    </>
  );
};

export default GardenProductsIdPage;
