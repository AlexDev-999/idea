import BackHomeProductsBtn from '@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn';
import { whiteCementData } from '@/data/products/whiteCementData';
import Image from 'next/image';
import styles from './WhiteCementSection.module.scss';

const WhiteCementSection = ({ lang, dictionary, buttons }) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />

        <h1 className={styles.title}>{dictionary.title}</h1>
        <h3 className={styles.subtitle}>{dictionary.description}</h3>

        <ul className={styles.list}>
          {whiteCementData.map((item, index) => (
            <li key={index}>
              <figure className={styles.imgContainer}>
                <Image src={item.image} fill={true} alt={item.titleUk} />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhiteCementSection;
