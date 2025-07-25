import TerrazzoTilesSection from "@/sections/terrazzoTilesSection/TerrazzoTilesSection";
import { getDictionary } from "@/helpers/getDictionary";

const TerrazzoTilesPage = async ({ params }) => {
  const { lang } = await params;
  const { terrazzoTilesSection, buttons } = await getDictionary(lang);

  return (
    <>
      <TerrazzoTilesSection lang={lang} dictionary={terrazzoTilesSection} buttons={buttons} />
    </>
  );
};

export default TerrazzoTilesPage;
