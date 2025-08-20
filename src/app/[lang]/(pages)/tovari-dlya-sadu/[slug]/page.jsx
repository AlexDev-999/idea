import { getDictionary } from "@/helpers/getDictionary";
import GardenProductsIdSection from "@/sections/gardenProductsIdSection/GardenProductsIdSection";

const GardenProductsIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const { gardenProductsSection } = await getDictionary(lang);

  const gardenProductsIdData = gardenProductsSection.productsData.find(
    (item) => item.slug === slug
  );

  return (
    <>
      <GardenProductsIdSection
        lang={lang}
        dictionary={gardenProductsSection}
        data={gardenProductsIdData}
      />
    </>
  );
};

export default GardenProductsIdPage;
