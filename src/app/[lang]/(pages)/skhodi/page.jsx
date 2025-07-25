import StairsSection from "@/sections/stairsSection/StairsSection";
import { getDictionary } from "@/helpers/getDictionary";

const StairsPage = async ({ params }) => {
  const { lang } = await params;
  const { stairsSection, buttons } = await getDictionary(lang);

  return (
    <>
      <StairsSection lang={lang} dictionary={stairsSection} buttons={buttons} />
    </>
  );
};

export default StairsPage;
