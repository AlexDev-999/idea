import Image from 'next/image';
import { i18n } from '@/dictionaries/i18n.config';
import BackHomeProductsBtn from '@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn';
import { stairsData } from '@/data/products/stairsData';
import styles from './StairsSection.module.scss';

const StairsSection = ({ lang, dictionary, buttons }) => {
  return (
    <section className={styles.section}>
      <div className={` container`}>
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />

        <h1 className={styles.title}>{dictionary.title}</h1>
        <h3 className={styles.subtitle}>{dictionary.subtitle}</h3>

        <div className={styles.container}>
          <figure className={styles.imgContainer}>
            <Image src={stairsData.image} alt={dictionary.title} fill={true} />
          </figure>
          <ul className={styles.list}>
            <li className={styles.desc}>
              {lang === i18n.locales[0]
                ? stairsData.descriptionUk_1
                : stairsData.descriptionEn_1}
            </li>
            <li className={styles.desc}>
              {lang === i18n.locales[0]
                ? stairsData.descriptionUk_2
                : stairsData.descriptionEn_2}
            </li>
            <li className={styles.weightContainer}>
              <h3>{dictionary.weight}</h3>
              <p>
                {lang === i18n.locales[0]
                  ? stairsData.weightUk
                  : stairsData.weightEn}
              </p>
            </li>
            <li className={styles.desc}>
              {lang === i18n.locales[0]
                ? stairsData.descriptionUk_3
                : stairsData.descriptionEn_3}
            </li>
            <li className={styles.desc}>
              {lang === i18n.locales[0]
                ? stairsData.descriptionUk_4
                : stairsData.descriptionEn_4}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StairsSection;
