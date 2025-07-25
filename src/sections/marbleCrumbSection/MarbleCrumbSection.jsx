import Image from "next/image";
import BackHomeProductsBtn from "@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn";
import { i18n } from "@/dictionaries/i18n.config";
import { marbleCrumbData } from "@/data/products/marbleCrumbData";
import styles from "./MarbleCrumbSection.module.scss";

const MarbleCrumbSection = ({ lang, dictionary, buttons }) => {
  const factionsList =
    lang === i18n.locales[0]
      ? marbleCrumbData.factionsListUk
      : marbleCrumbData.factionsListEn;

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />
        <h1 className={styles.title}>{dictionary.title}</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.img}
              src={marbleCrumbData.img}
              alt={
                lang === i18n.locales[0]
                  ? marbleCrumbData.titleUk
                  : marbleCrumbData.titleEn
              }
              // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
              sizes="50vw"
              fill={true}
              priority={true}
            />
          </div>
          <div className={styles.infoWrapper}>
            <h2 className={styles.productTitle}>
              {lang === i18n.locales[0]
                ? marbleCrumbData.titleUk
                : marbleCrumbData.titleEn}
            </h2>
            <p className={styles.productDescription}>
              {lang === i18n.locales[0]
                ? marbleCrumbData.descriptionUk_1
                : marbleCrumbData.descriptionEn_1}
            </p>
            <p
              className={`${styles.productDescription} ${styles.lastDescription}`}
            >
              {lang === i18n.locales[0]
                ? marbleCrumbData.descriptionUk_2
                : marbleCrumbData.descriptionEn_2}
            </p>
            <p className={styles.factionsSubTitle}>{dictionary.subTitle}</p>
            <ul className={styles.factionsList}>
              {factionsList.map((item) => (
                <li key={item} className={styles.factionItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarbleCrumbSection;
