import CertificatesSection from "@/sections/certificatesSection/CertificatesSection";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

export async function generateMetadata({ params }) {
  const { lang } = await params;

    const {seoCertificatesPage} = await getDictionary(lang);
  
    const title = seoCertificatesPage.seoMetaMainTitle;
    const description = seoCertificatesPage.seoMetaMainDescription;
    const keywords = seoCertificatesPage.seoMetaKeywords;
    const titleOpenGraph = seoCertificatesPage.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = seoCertificatesPage.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}sertifikati`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}sertifikati`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/sertifikati`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}sertifikati`,
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

const CertificatesPage = async ({ params }) => {
  const { lang } = await params;
  const { certificatesSection, seoCertificatesPage } = await getDictionary(lang);
  
    const pageUrlJsonLd = getSeoMetaPageUrl(lang);
  
    const name_01 = seoCertificatesPage.seoMetaNameJsonLd_1;
    const name_02 = seoCertificatesPage.seoMetaNameJsonLd_2;
  
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
            "@id": `${pageUrlJsonLd}sertifikati`,
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
      <CertificatesSection lang={lang} dictionary={certificatesSection} />
    </>
  );
};

export default CertificatesPage;
