import LimeStoneSection from "@/sections/limeStoneSection/LimeStoneSection";
import { getDictionary } from "@/helpers/getDictionary";

const LimeStonePage = async ({ params }) => {
  const { lang } = await params;
  const { limeStoneSection, buttons } = await getDictionary(lang);

  return (
    <>
      <LimeStoneSection
        lang={lang}
        dictionary={limeStoneSection}
        buttons={buttons}
      />
    </>
  );
};

export default LimeStonePage;
