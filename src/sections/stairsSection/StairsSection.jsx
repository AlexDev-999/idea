import Image from 'next/image';
import { i18n } from '@/dictionaries/i18n.config';
import BackHomeProductsBtn from '@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn';
import styles from './StairsSection.module.scss';
import ProductsIdList from '@/components/ProductsIdList/ProductsIdList';

const StairsSection = ({ lang, dictionary, buttons }) => {
  return (
    <section className={styles.section}>
      <div className={` container ${styles.container}`}>
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />

        <h1 className={styles.title}>{dictionary.title}</h1>
        <h3 className={styles.subtitle}>{dictionary.subtitle}</h3>

        <div className={styles.containerContent}>
          <figure className={styles.imgContainer}>
            <Image
              src={dictionary.images[0]}
              alt={dictionary.title}
              fill={true}
              sizes="(max-width: 767px) 320px, (max-width: 1439px) 352px, 1200px"
            />
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
        <ProductsIdList data={dictionary} />
      </div>
    </section>
  );
};

export default StairsSection;
