import WhiteCementSection from '@/sections/whiteCementSection/WhiteCementSection';
import { getDictionary } from '@/helpers/getDictionary';
import { getSeoMetaPageUrl } from '@/helpers/getSeoMetaPageUrl';

export async function generateMetadata({ params }) {
  const { lang } = await params;

    const {seoWhiteCementPage} = await getDictionary(lang);
  
    const title = seoWhiteCementPage.seoMetaMainTitle;
    const description = seoWhiteCementPage.seoMetaMainDescription;
    const keywords = seoWhiteCementPage.seoMetaKeywords;
    const titleOpenGraph = seoWhiteCementPage.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = seoWhiteCementPage.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}bilij-czement`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}bilij-czement`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/bilij-czement`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}bilij-czement`,
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

const WhiteCementPage = async ({ params }) => {
  const { lang } = await params;
  const { whiteCementSection, buttons, seoWhiteCementPage } = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);
    
      const name_01 = seoWhiteCementPage.seoMetaNameJsonLd_1;
      const name_02 = seoWhiteCementPage.seoMetaNameJsonLd_2;
    
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
              "@id": `${pageUrlJsonLd}bilij-czement`,
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
      <WhiteCementSection
        lang={lang}
        dictionary={whiteCementSection}
        buttons={buttons}
      />
    </>
  );
};

export default WhiteCementPage;
