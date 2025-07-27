import Image from "next/image";
import BackHomeProductsBtn from "@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn";
import CustomLink from "@/components/CustomLink/CustomLink";
import { i18n } from "@/dictionaries/i18n.config";
// import { terrazzoTilesData } from "@/data/products/terrazzoTilesData";
import { terrazzoTilesExamplesData } from "@/data/products/terrazzoTilesExamplesData";
import styles from "./TerrazzoTilesSection.module.scss";

const TerrazzoTilesSection = ({ lang, dictionary, buttons }) => {
  const terrazzoTilesData = dictionary.productsData;

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />
        <h1 className={styles.title}>{dictionary.title}</h1>
        <p className={styles.description}>{dictionary.description}</p>
        <ul className={styles.cardList}>
          {terrazzoTilesData.map((item) => (
            <li key={item.slug} className={styles.card}>
              <div className={styles.cardImgWrapper}>
                <Image
                  className={styles.cardImg}
                  src={item.cardImg}
                  alt={item.cardTitle}
                  // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 30vw, 384px"
                  // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 30vw, 1200px"
                  sizes="33vw"
                  fill={true}
                />
              </div>

              <div className={styles.cardTitleAndLinkWrapper}>
                <p className={styles.cardTitle}>
                  {item.cardTitle}
                </p>
                <p className={styles.cardSubTitle}>
                  {item.cardSubTitle}
                </p>
                <CustomLink
                  linkCustomClass={styles.customLink}
                  href={`/plitka-teraczo/${item.slug}`}
                  lang={lang}
                  text={buttons.moreBtn}
                />
              </div>
            </li>
          ))}
        </ul>
        <p className={styles.productionSubTitle}>
          {dictionary.productionSubTitle}
        </p>
        <p className={styles.exampleText}>{dictionary.exampleText}</p>
        <ul className={styles.exampleList}>
          {terrazzoTilesExamplesData.map((item) => (
            <li key={item.slug} className={styles.exampleImgWrapper}>
              <Image
                className={styles.exampleImg}
                src={item.img}
                alt={item.slug}
                // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 30vw, 384px"
                // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 30vw, 1200px"
                sizes="25vw"
                fill={true}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TerrazzoTilesSection;
