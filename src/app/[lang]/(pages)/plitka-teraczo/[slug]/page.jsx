import TerrazzoTilesIdSection from "@/sections/terrazzoTilesIdSection/TerrazzoTilesIdSection";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const { terrazzoTilesSection } = await getDictionary(lang);

  const seoProductIdData = terrazzoTilesSection.productsData.find(
    (item) => item.slug === slug
  );
  
    const title = seoProductIdData.seoMetaMainTitle;
    const description = seoProductIdData.seoMetaMainDescription;
    const titleOpenGraph = seoProductIdData.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = seoProductIdData.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    alternates: {
      canonical: `${seoMetaPageUrl}plitka-teraczo/${slug}`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}plitka-teraczo/${slug}`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/plitka-teraczo/${slug}`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}plitka-teraczo/${slug}`,
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

const TerrazzoTilesIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const { terrazzoTilesSection } = await getDictionary(lang);

  const productIdData = terrazzoTilesSection.productsData.find(
    (item) => item.slug === slug
  );

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);
        
          const name_01 = productIdData.seoMetaNameJsonLd_1;
          const name_02 = productIdData.seoMetaNameJsonLd_2;
          const name_03 = productIdData.seoMetaNameJsonLd_3;
        
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
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@id": `${pageUrlJsonLd}plitka-teraczo/${slug}`,
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
      <TerrazzoTilesIdSection lang={lang} dictionary={productIdData} />
    </>
  );
};

export default TerrazzoTilesIdPage;
