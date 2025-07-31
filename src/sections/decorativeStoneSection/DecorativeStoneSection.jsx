import Image from 'next/image';
import Link from 'next/link';
import BackHomeProductsBtn from '@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn';
import styles from './DecorativeStoneSection.module.scss';

const DecorativeStoneSection = ({ lang, dictionary, buttons }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />
        <h1 className={styles.title}>{dictionary.title}</h1>
        <ul className={styles.list}>
          {dictionary.productsData.map((item, index) => (
            <li key={index} className={styles.item}>
              <figure className={styles.imgContainer}>
                <Image src={item.images[0]} alt={item.title} fill={true} />
              </figure>
              <div className={styles.content}>
                <h3 className={styles.subtitle}>{item.title}</h3>
                <Link
                  href={`dekorativnij-kamin/${item.slug}`}
                  className={styles.moreBtn}
                >
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

export default DecorativeStoneSection;
