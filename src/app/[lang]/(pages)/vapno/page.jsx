import LimeSection from "@/sections/limeSection/LimeSection";
import { getDictionary } from "@/helpers/getDictionary";

const LimePage = async ({ params }) => {
  const { lang } = await params;
  const { limeSection, buttons } = await getDictionary(lang);

  return (
    <>
      <LimeSection lang={lang} dictionary={limeSection} buttons={buttons} />
    </>
  );
};

export default LimePage;
