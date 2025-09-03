import { getDictionary } from '@/helpers/getDictionary';
import { getSeoMetaPageUrl } from '@/helpers/getSeoMetaPageUrl';
import DecorativeStoneIdSection from '@/sections/decorativeStoneIdSection/DecorativeStoneIdSection';

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  const { decorativeStoneSection } = await getDictionary(lang);

  const decorativeStoneProductsIdData = decorativeStoneSection.productsData.find(
    (item) => item.slug === slug
  );
  
    const title = decorativeStoneProductsIdData.seoMetaMainTitle;
    const description = decorativeStoneProductsIdData.seoMetaMainDescription;
    const titleOpenGraph = decorativeStoneProductsIdData.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = decorativeStoneProductsIdData.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    alternates: {
      canonical: `${seoMetaPageUrl}dekorativnij-kamin/${slug}`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}dekorativnij-kamin/${slug}`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/dekorativnij-kamin/${slug}`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}dekorativnij-kamin/${slug}`,
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

const DecorativeStoneIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const { decorativeStoneSection, buttons } = await getDictionary(lang);

  const decorativeStoneIdData = decorativeStoneSection.productsData.find(
    (item) => item.slug === slug
  );

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);
      
        const name_01 = decorativeStoneIdData.seoMetaNameJsonLd_1;
        const name_02 = decorativeStoneIdData.seoMetaNameJsonLd_2;
        const name_03 = decorativeStoneIdData.seoMetaNameJsonLd_3;
      
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
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@id": `${pageUrlJsonLd}dekorativnij-kamin/${slug}`,
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
      <DecorativeStoneIdSection
        lang={lang}
        dictionary={decorativeStoneSection}
        buttons={buttons}
        data={decorativeStoneIdData}
      />
    </>
  );
};

export default DecorativeStoneIdPage;
