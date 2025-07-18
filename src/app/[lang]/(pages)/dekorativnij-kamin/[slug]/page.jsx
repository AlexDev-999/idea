import DecorativeStoneIdSection from "@/sections/decorativeStoneIdSection/DecorativeStoneIdSection";
import { getDictionary } from "@/helpers/getDictionary";
// import { arrOfBlogs } from "@/data/blog/arrOfBlogs";

const DecorativeStoneIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const { decorativeStoneIdSection } = await getDictionary(lang);

  // const blogIdData = arrOfBlogs.find((item) => item.slug === slug);

  return (
    <>
      <DecorativeStoneIdSection
        lang={lang}
        dictionary={decorativeStoneIdSection}
        // data={blogIdData}
      />
    </>
  );
};

export default DecorativeStoneIdPage;
