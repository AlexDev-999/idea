import Image from "next/image";
import BackHomeProductsBtn from "@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn";
import styles from "./MarbleCrumbSection.module.scss";

const MarbleCrumbSection = ({ lang, dictionary, buttons }) => {

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />
        <h1 className={styles.title}>{dictionary.title}</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.img}
              src={dictionary.productData.img}
              alt={dictionary.productData.title}
              // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
              sizes="50vw"
              fill={true}
              priority={true}
            />
          </div>
          <div className={styles.infoWrapper}>
            <h2 className={styles.productTitle}>
              {dictionary.productData.title}
            </h2>
            <p className={styles.productDescription}>
              {dictionary.productData.description_1}
            </p>
            <p
              className={`${styles.productDescription} ${styles.lastDescription}`}
            >
              {dictionary.productData.description_2}
            </p>
            <p className={styles.factionsSubTitle}>{dictionary.subTitle}</p>
            <ul className={styles.factionsList}>
              {dictionary.productData.factionsList.map((item) => (
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
