import FaqSection from "@/sections/faqSection/FaqSection";
import { getDictionary } from "@/helpers/getDictionary";

const FaqPage = async ({ params }) => {
  const { lang } = await params;
  const { faqSection } = await getDictionary(lang);

  return (
    <>
      <FaqSection lang={lang} dictionary={faqSection} />
    </>
  );
};

export default FaqPage;
