import AboutUsSection from "@/sections/aboutUsSection/AboutUsSection";
import { getDictionary } from "@/helpers/getDictionary";

const AboutUsPage = async ({ params }) => {
  const { lang } = await params;
  const { aboutUsSection } = await getDictionary(lang);

  return (
    <>
      <AboutUsSection lang={lang} dictionary={aboutUsSection} />
    </>
  );
};

export default AboutUsPage;
