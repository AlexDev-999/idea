import Image from "next/image";
import BackHomeProductsBtn from "@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./LimeStoneSection.module.scss";
import { limeStoneData } from "@/data/products/limeStoneData";

const LimeStoneSection = ({ lang, dictionary, buttons }) => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />
        <h1 className={styles.title}>{dictionary.title}</h1>
        <p className={styles.subscription}>{dictionary.subscription}</p>
        <p className={styles.mainApplicationSubTitle}>
          {dictionary.mainApplication}
        </p>
        <ul className={styles.mainApplicationList}>
          {dictionary.mainApplicationList.map((item) => (
            <li key={item} className={styles.mainApplicationItem}>
              {item}
            </li>
          ))}
        </ul>
        <ul>
          {limeStoneData.map((item, index) => {
            const applicationList =
              lang === i18n.locales[0]
                ? item.applicationListUk
                : item.applicationListEn;
            const deliveryList =
              lang === i18n.locales[0]
                ? item.deliveryListUk
                : item.deliveryListEn;
            const compositionList =
              lang === i18n.locales[0]
                ? item.compositionListUk
                : item.compositionListEn;
            return (
              <li key={item.slug} className={styles.productItem}>
                <div className={styles.imgWrapper}>
                  <Image
                    className={styles.img}
                    src={item.img}
                    alt={lang === i18n.locales[0] ? item.titleUk : item.titleEn}
                    // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
                    sizes="50vw"
                    fill={true}
                    priority={index === 0 ? true : false}
                  />
                </div>
                <div className={styles.infoWrapper}>
                  <h2 className={styles.productTitle}>
                    {lang === i18n.locales[0] ? item.titleUk : item.titleEn}
                  </h2>
                  <p className={styles.compositiontionSubTitle}>
                    {dictionary.compositionSubTitle}
                  </p>
                  <ul className={styles.compositionList}>
                    {compositionList.map((el, index) => (
                      <li key={index} className={styles.compositionItem}>
                        {el}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.applicationSubTitle}>
                    {dictionary.application}
                  </p>
                  <ul className={styles.applicationList}>
                    {applicationList.map((el, index) => (
                      <li key={index} className={styles.applicationItem}>
                        {el}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.deliverySubTitle}>
                    {dictionary.delivery}
                  </p>
                  <ul className={styles.deliveryList}>
                    {deliveryList.map((el, index) => (
                      <li key={index} className={styles.deliveryItem}>
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default LimeStoneSection;
