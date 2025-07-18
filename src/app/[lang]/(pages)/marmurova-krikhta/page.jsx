import MarbleCrumbSection from "@/sections/marbleCrumbSection/MarbleCrumbSection";
import { getDictionary } from "@/helpers/getDictionary";

const MarbleCrumbPage = async ({ params }) => {
  const { lang } = await params;
  const { marbleCrumbSection } = await getDictionary(lang);

  return (
    <>
      <MarbleCrumbSection lang={lang} dictionary={marbleCrumbSection} />
    </>
  );
};

export default MarbleCrumbPage;
