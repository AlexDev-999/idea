import MarbleCrumbSection from "@/sections/marbleCrumbSection/MarbleCrumbSection";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

export async function generateMetadata({ params }) {
  const { lang } = await params;

    const {seoMarbleCrumbPage} = await getDictionary(lang);
  
    const title = seoMarbleCrumbPage.seoMetaMainTitle;
    const description = seoMarbleCrumbPage.seoMetaMainDescription;
    const keywords = seoMarbleCrumbPage.seoMetaKeywords;
    const titleOpenGraph = seoMarbleCrumbPage.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = seoMarbleCrumbPage.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}marmurova-krikhta`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}marmurova-krikhta`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/marmurova-krikhta`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}marmurova-krikhta`,
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

const MarbleCrumbPage = async ({ params }) => {
  const { lang } = await params;
  const { marbleCrumbSection, buttons,seoMarbleCrumbPage } = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);
    
      const name_01 = seoMarbleCrumbPage.seoMetaNameJsonLd_1;
      const name_02 = seoMarbleCrumbPage.seoMetaNameJsonLd_2;
    
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
              "@id": `${pageUrlJsonLd}marmurova-krikhta`,
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
      <MarbleCrumbSection lang={lang} dictionary={marbleCrumbSection} buttons={buttons}/>
    </>
  );
};

export default MarbleCrumbPage;
