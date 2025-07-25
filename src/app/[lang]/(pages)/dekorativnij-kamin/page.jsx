import DecorativeStoneSection from "@/sections/decorativeStoneSection/DecorativeStoneSection";
import { getDictionary } from "@/helpers/getDictionary";

const DecorativeStonePage = async ({ params }) => {
  const { lang } = await params;
  const { decorativeStoneSection, buttons } = await getDictionary(lang);

  return (
    <>
      <DecorativeStoneSection lang={lang} dictionary={decorativeStoneSection} buttons={buttons} />
    </>
  );
};

export default DecorativeStonePage;
