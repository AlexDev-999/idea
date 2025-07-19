import CertificatesSection from "@/sections/certificatesSection/CertificatesSection";
import { getDictionary } from "@/helpers/getDictionary";

const CertificatesPage = async ({ params }) => {
  const { lang } = await params;
  const { certificatesSection } = await getDictionary(lang);

  return (
    <>
      <CertificatesSection lang={lang} dictionary={certificatesSection} />
    </>
  );
};

export default CertificatesPage;
