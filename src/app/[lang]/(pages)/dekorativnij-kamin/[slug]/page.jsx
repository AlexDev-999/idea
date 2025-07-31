import { getDictionary } from '@/helpers/getDictionary';
import DecorativeStoneIdSection from '@/sections/decorativeStoneIdSection/DecorativeStoneIdSection';

const DecorativeStoneIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const { decorativeStoneSection, buttons } = await getDictionary(lang);

  const decorativeStoneIdData = decorativeStoneSection.productsData.find(
    (item) => item.slug === slug
  );

  return (
    <>
      <DecorativeStoneIdSection
        lang={lang}
        dictionary={decorativeStoneSection}
        buttons={buttons}
        data={decorativeStoneIdData}
      />
    </>
  );
};

export default DecorativeStoneIdPage;
