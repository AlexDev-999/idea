import TerrazzoTilesWallStrips from "@/components/TerrazzoTilesWallStrips/TerrazzoTilesWallStrips";
import styles from "./TerrazzoTilesIdSection.module.scss";


const TerrazzoTilesIdSection = ({ lang, dictionary, buttons,slug }) => {
  return <section className={`section ${styles.section}`}>        
        {slug === "wall-strips" && <TerrazzoTilesWallStrips lang={lang} dictionary={dictionary.terrazzoTilesWallStrips} buttons={buttons}/>}
  </section>;
};

export default TerrazzoTilesIdSection;
