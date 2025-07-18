import WhiteCementSection from "@/sections/whiteCementSection/WhiteCementSection";
import { getDictionary } from "@/helpers/getDictionary";

const WhiteCementPage = async ({ params }) => {
  const { lang } = await params;
  const { whiteCementSection } = await getDictionary(lang);

  return (
    <>
      <WhiteCementSection lang={lang} dictionary={whiteCementSection} />
    </>
  );
};

export default WhiteCementPage;
