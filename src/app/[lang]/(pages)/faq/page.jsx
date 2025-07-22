import FaqSection from '@/sections/faqSection/FaqSection';
import { getDictionary } from '@/helpers/getDictionary';
import { FaqData } from '@/data/faqData.js';

const FaqPage = async ({ params }) => {
  const { lang } = await params;
  const { faqSection } = await getDictionary(lang);

  return (
    <>
      <FaqSection lang={lang} dictionary={faqSection} data={FaqData} />
    </>
  );
};

export default FaqPage;
