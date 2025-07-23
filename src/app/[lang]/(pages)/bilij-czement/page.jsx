import WhiteCementSection from '@/sections/whiteCementSection/WhiteCementSection';
import { getDictionary } from '@/helpers/getDictionary';

const WhiteCementPage = async ({ params }) => {
  const { lang } = await params;
  const { whiteCementSection, buttons } = await getDictionary(lang);

  return (
    <>
      <WhiteCementSection
        lang={lang}
        dictionary={whiteCementSection}
        buttons={buttons}
      />
    </>
  );
};

export default WhiteCementPage;
