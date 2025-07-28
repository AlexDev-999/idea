import TerrazzoTilesClassic from '@/components/TerrazzoTilesClassic/TerrazzoTilesClassic';
import TerrazzoTilesWallStrips from '@/components/TerrazzoTilesWallStrips/TerrazzoTilesWallStrips';
import styles from './TerrazzoTilesIdSection.module.scss';

const TerrazzoTilesIdSection = ({ lang, dictionary, buttons }) => {
  console.log('dictionary', dictionary);
  const wallStripsSlugs = ['tereza', 'margita', 'radka', 'xena', 'ornela'];

  return (
    <section className={`section ${styles.section}`}>
      {/* unique markup for TerrazzoTilesWallStrips */}
      {dictionary.slug === 'wall-strips' && (
        <TerrazzoTilesWallStrips
          lang={lang}
          dictionary={dictionary}
          buttons={buttons}
        />
      )}
      {wallStripsSlugs.includes(dictionary.slug) && (
        <TerrazzoTilesClassic
          lang={lang}
          dictionary={dictionary}
          buttons={buttons}
        />
      )}
    </section>
  );
};

export default TerrazzoTilesIdSection;
