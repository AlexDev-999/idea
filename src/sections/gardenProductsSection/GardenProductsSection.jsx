import BackHomeProductsBtn from '@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn';
import { gardenProductsData } from '@/data/products/gardenProductsData';
import Image from 'next/image';
import Link from 'next/link';
import styles from './GardenProductsSection.module.scss';

const GardenProductsSection = ({ lang, dictionary, buttons }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />
        <h1 className={styles.title}>{dictionary.title}</h1>
        <ul className={styles.list}>
          {gardenProductsData.map((item, index) => (
            <li key={index} className={styles.item}>
              <figure className={styles.imgContainer}>
                <Image src={item.image} alt={item.titleUk} fill={true} />
              </figure>
              <div className={styles.content}>
                <h3 className={styles.subtitle}>{item.titleUk}</h3>
                <Link href="/" className={styles.moreBtn}>
                  {dictionary.more}
                  <svg className={styles.arrowIcon}>
                    <use href="/sprite.svg#icon-arrow-right" />
                  </svg>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GardenProductsSection;
