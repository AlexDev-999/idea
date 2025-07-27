import TerrazzoTilesWallStrips from "@/components/TerrazzoTilesWallStrips/TerrazzoTilesWallStrips";
import styles from "./TerrazzoTilesIdSection.module.scss";


const TerrazzoTilesIdSection = ({ lang, dictionary, buttons }) => {
  console.log('dictionary', dictionary);

  return <section className={`section ${styles.section}`}>        
  {/* unique markup for TerrazzoTilesWallStrips */}
        {dictionary.slug === "wall-strips" && <TerrazzoTilesWallStrips lang={lang} dictionary={dictionary} buttons={buttons}/>}
  </section>;
};

export default TerrazzoTilesIdSection;
