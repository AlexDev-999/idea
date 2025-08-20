import TerrazzoTilesIdSection from "@/sections/terrazzoTilesIdSection/TerrazzoTilesIdSection";
import { getDictionary } from "@/helpers/getDictionary";

const TerrazzoTilesIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const { terrazzoTilesSection } = await getDictionary(lang);

  const productIdData = terrazzoTilesSection.productsData.find(
    (item) => item.slug === slug
  );

  return (
    <>
      <TerrazzoTilesIdSection lang={lang} dictionary={productIdData} />
    </>
  );
};

export default TerrazzoTilesIdPage;
