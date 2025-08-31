import FaqSection from '@/sections/faqSection/FaqSection';
import { getDictionary } from '@/helpers/getDictionary';
import { FaqData } from '@/data/faqData.js';
import { getSeoMetaPageUrl } from '@/helpers/getSeoMetaPageUrl';

export async function generateMetadata({ params }) {
  const { lang } = await params;

    const {seoFaqPage} = await getDictionary(lang);
  
    const title = seoFaqPage.seoMetaMainTitle;
    const description = seoFaqPage.seoMetaMainDescription;
    const keywords = seoFaqPage.seoMetaKeywords;
    const titleOpenGraph = seoFaqPage.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = seoFaqPage.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}faq`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}faq`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/faq`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}faq`,
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

const FaqPage = async ({ params }) => {
  const { lang } = await params;
  const { faqSection, seoFaqPage } = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);
  
    const name_01 = seoFaqPage.seoMetaNameJsonLd_1;
    const name_02 = seoFaqPage.seoMetaNameJsonLd_2;
  
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
            "@id": `${pageUrlJsonLd}faq`,
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
      <FaqSection lang={lang} dictionary={faqSection} data={FaqData} />
    </>
  );
};

export default FaqPage;
