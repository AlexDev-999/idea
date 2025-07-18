import CalciteSection from "@/sections/calciteSection/CalciteSection";
import { getDictionary } from "@/helpers/getDictionary";

const CalcitePage = async ({ params }) => {
  const { lang } = await params;
  const { calciteSection } = await getDictionary(lang);

  return (
    <>
      <CalciteSection lang={lang} dictionary={calciteSection} />
    </>
  );
};

export default CalcitePage;
