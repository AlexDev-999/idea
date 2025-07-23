import LimeStoneSection from "@/sections/limeStoneSection/LimeStoneSection";
import { getDictionary } from "@/helpers/getDictionary";

const LimestonePage = async ({ params }) => {
  const { lang } = await params;
  const { limeStoneSection } = await getDictionary(lang);

  return (
    <>
      <LimeStoneSection lang={lang} dictionary={limeStoneSection} />
    </>
  );
};

export default LimestonePage;
