import TerrazzoTilesClassic from '@/components/TerrazzoTilesClassic/TerrazzoTilesClassic';
import TerrazzoTilesFlooringStrips from '@/components/TerrazzoTilesFlooringStrips/TerrazzoTilesFlooringStrips';
import TerrazzoTilesBeatrix from '@/components/TerrazzoTilesBeatrix/TerrazzoTilesBeatrix';
import TerrazzoTilesWallStrips from '@/components/TerrazzoTilesWallStrips/TerrazzoTilesWallStrips';
import styles from './TerrazzoTilesIdSection.module.scss';

const TerrazzoTilesIdSection = ({ lang, dictionary, buttons }) => {
  console.log('dictionary', dictionary);
  const tilesClassicSlugs = ['tereza', 'margita', 'radka', 'xena', 'ornela'];
  const beatrixSlugs = ["beatrix", "beatrix-large"];

  return (
    <section className={`section ${styles.section}`}>

      {tilesClassicSlugs.includes(dictionary.slug) && (
        <TerrazzoTilesClassic
          lang={lang}
          dictionary={dictionary}
          buttons={buttons}
        />
      )}

      {dictionary.slug === "flooring-strips" && <TerrazzoTilesFlooringStrips lang={lang}
          dictionary={dictionary}
          buttons={buttons}/>}
      
      {beatrixSlugs.includes(dictionary.slug) &&<TerrazzoTilesBeatrix lang={lang}
          dictionary={dictionary}
          buttons={buttons}/>}

      {dictionary.slug === 'wall-strips' && (
        <TerrazzoTilesWallStrips
          lang={lang}
          dictionary={dictionary}
          buttons={buttons}
        />
      )}    
    </section>
  );
};

export default TerrazzoTilesIdSection;
