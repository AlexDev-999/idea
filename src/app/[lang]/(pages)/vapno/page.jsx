import LimeSection from "@/sections/limeSection/LimeSection";
import { getDictionary } from "@/helpers/getDictionary";

const CalxPage = async ({ params }) => {
  const { lang } = await params;
  const { limeSection } = await getDictionary(lang);

  return (
    <>
      <LimeSection lang={lang} dictionary={limeSection} />
    </>
  );
};

export default CalxPage;
