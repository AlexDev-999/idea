import TerrazzoTilesIdSection from "@/sections/terrazzoTilesIdSection/TerrazzoTilesIdSection";
import { getDictionary } from "@/helpers/getDictionary";
// import { arrOfBlogs } from "@/data/blog/arrOfBlogs";

const TerrazzoTilesIdPage = async ({ params }) => {
  const { lang, slug } = await params;
  const { terrazzoTilesIdSection, buttons } = await getDictionary(lang);

  // const blogIdData = arrOfBlogs.find((item) => item.slug === slug);

  return (
    <>
      <TerrazzoTilesIdSection
        lang={lang}
        dictionary={terrazzoTilesIdSection}
        // data={blogIdData}
        buttons={buttons}
        slug={slug}
      />
    </>
  );
};

export default TerrazzoTilesIdPage;
