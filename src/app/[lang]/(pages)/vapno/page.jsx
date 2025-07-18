import CalxSection from "@/sections/calxSection/CalxSection";
import { getDictionary } from "@/helpers/getDictionary";

const CalxPage = async ({ params }) => {
  const { lang } = await params;
  const { calxSection } = await getDictionary(lang);

  return (
    <>
      <CalxSection lang={lang} dictionary={calxSection} />
    </>
  );
};

export default CalxPage;
