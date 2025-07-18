import StairsSection from "@/sections/stairsSection/StairsSection";
import { getDictionary } from "@/helpers/getDictionary";

const StairsPage = async ({ params }) => {
  const { lang } = await params;
  const { stairsSection } = await getDictionary(lang);

  return (
    <>
      <StairsSection lang={lang} dictionary={stairsSection} />
    </>
  );
};

export default StairsPage;
