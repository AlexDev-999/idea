import GasBlocksSection from "@/sections/gasBlocksSection/GasBlocksSection";
import { getDictionary } from "@/helpers/getDictionary";

const GasBlocksPage = async ({ params }) => {
  const { lang } = await params;
  const { gasBlocksSection } = await getDictionary(lang);

  return (
    <>
      <GasBlocksSection lang={lang} dictionary={gasBlocksSection} />
    </>
  );
};

export default GasBlocksPage;
