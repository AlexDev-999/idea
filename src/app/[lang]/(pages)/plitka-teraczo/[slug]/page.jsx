import TerrazzoTilesIdSection from "@/sections/terrazzoTilesIdSection/TerrazzoTilesIdSection";
import { getDictionary } from "@/helpers/getDictionary";
// import { arrOfBlogs } from "@/data/blog/arrOfBlogs";

const TerrazzoTilesIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const { terrazzoTilesIdSection } = await getDictionary(lang);

  // const blogIdData = arrOfBlogs.find((item) => item.slug === slug);

  return (
    <>
      <TerrazzoTilesIdSection
        lang={lang}
        dictionary={terrazzoTilesIdSection}
        // data={blogIdData}
      />
    </>
  );
};

export default TerrazzoTilesIdPage;
