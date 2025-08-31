import AboutUsSection from "@/sections/aboutUsSection/AboutUsSection";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

export async function generateMetadata({ params }) {
  const { lang } = await params;

    const {seoAboutUsPage} = await getDictionary(lang);
  
    const title = seoAboutUsPage.seoMetaMainTitle;
    const description = seoAboutUsPage.seoMetaMainDescription;
    const keywords = seoAboutUsPage.seoMetaKeywords;
    const titleOpenGraph = seoAboutUsPage.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = seoAboutUsPage.seoMetaDescriptionOpenGraph;
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

    return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}pro-nas`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}pro-nas`,
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/pro-nas`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}pro-nas`,
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

const AboutUsPage = async ({ params }) => {
  const { lang } = await params;
  const { aboutUsSection, seoAboutUsPage } = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);

  const name_01 = seoAboutUsPage.seoMetaNameJsonLd_1;
  const name_02 = seoAboutUsPage.seoMetaNameJsonLd_2;

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
          "@id": `${pageUrlJsonLd}about-us`,
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
      <AboutUsSection lang={lang} dictionary={aboutUsSection} />
    </>
  );
};

export default AboutUsPage;
