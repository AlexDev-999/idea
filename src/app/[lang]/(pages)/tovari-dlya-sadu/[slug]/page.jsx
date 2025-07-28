import { getDictionary } from '@/helpers/getDictionary';
import GardenProductsIdSection from '@/sections/GardenProductsIdSection/GardenProductsIdSection';

const GardenProductsIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const { gardenProductsSection, buttons } = await getDictionary(lang);

  const gardenProductsIdData = gardenProductsSection.productsData.find(
    (item) => item.slug === slug
  );

  return (
    <>
      <GardenProductsIdSection
        lang={lang}
        dictionary={gardenProductsSection}
        buttons={buttons}
        data={gardenProductsIdData}
      />
    </>
  );
};

export default GardenProductsIdPage;
