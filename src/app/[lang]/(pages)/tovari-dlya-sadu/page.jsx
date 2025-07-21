import GardenProductsSection from "@/sections/gardenProductsSection/GardenProductsSection";
import { getDictionary } from "@/helpers/getDictionary";

const GardenProductsPage = async ({ params }) => {
  const { lang } = await params;
  const { gardenProductsSection } = await getDictionary(lang);

  return (
    <>
      <GardenProductsSection lang={lang} dictionary={gardenProductsSection} />
    </>
  );
};

export default GardenProductsPage;
