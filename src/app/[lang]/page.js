import HomeHeroSection from "@/sections/homeHeroSection/HomeHeroSection";
import HomeProductsSection from "@/sections/homeProductsSection/HomeProductsSection";
import HomeAboutUsSection from "@/sections/homeAboutUsSection/HomeAboutUsSection";
import HomePartnersSection from "@/sections/homePartnersSection/HomePartnersSection";
import { getDictionary } from "@/helpers/getDictionary";

export default async function Home({ params }) {
  const { lang } = await params;

  const {
    homeHeroSection,
    homeProductsSection,
    homeAboutUsSection,
    homePartnersSection,
  } = await getDictionary(lang);

  return (
    <>
      <HomeHeroSection lang={lang} dictionary={homeHeroSection} />
      <HomeProductsSection lang={lang} dictionary={homeProductsSection} />
      <HomeAboutUsSection lang={lang} dictionary={homeAboutUsSection} />
      <HomePartnersSection lang={lang} dictionary={homePartnersSection} />
    </>
  );
}
