import Image from 'next/image';
import { i18n } from '@/dictionaries/i18n.config';
import BackHomeProductsBtn from '@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn';
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
            <Image src={dictionary.image} alt={dictionary.title} fill={true} />
          </figure>
          <ul className={styles.list}>
            <li className={styles.desc}>{dictionary.description_1}</li>
            <li className={styles.desc}>{dictionary.description_2}</li>
            <li className={styles.weightContainer}>
              <h3>{dictionary.sizesData.title}</h3>
              <p>{dictionary.sizesData.value}</p>
            </li>
            <li className={styles.desc}>{dictionary.description_3}</li>
            <li className={styles.desc}>{dictionary.description_4}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StairsSection;
