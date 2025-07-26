import { gardenProductsData } from '@/data/products/gardenProductsData';
import { getDictionary } from '@/helpers/getDictionary';
import GardenProductsIdSection from '@/sections/GardenProductsIdSection/GardenProductsIdSection';

const GardenProductsIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const { gardenProductsIdSection, buttons } = await getDictionary(lang);

  const gardenProductsIdData = gardenProductsData.find(
    (item) => item.slug === slug
  );

  return (
    <>
      <GardenProductsIdSection
        lang={lang}
        dictionary={gardenProductsIdSection}
        buttons={buttons}
        data={gardenProductsIdData}
      />
    </>
  );
};

export default GardenProductsIdPage;
