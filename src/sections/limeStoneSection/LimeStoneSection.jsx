import Image from "next/image";
import BackHomeProductsBtn from "@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn";
import CalmitTable from "@/components/tables/CalmitTable/CalmitTable";
import FlorakalkTable from "@/components/tables/FlorakalkTable/FlorakalkTable";
import { i18n } from "@/dictionaries/i18n.config";
// import { limeStoneData } from "@/data/products/limeStoneData";
import styles from "./LimeStoneSection.module.scss";

const LimeStoneSection = ({ lang, dictionary, buttons }) => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />
        <h1 className={styles.title}>{dictionary.title}</h1>
        <p className={styles.description}>{dictionary.description}</p>
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
          {dictionary.productsData.map((item, index) => {         
           
            return (
              <li key={item.slug} className={styles.productItem}>
                <div className={styles.imgWrapper}>
                  <Image
                    className={styles.img}
                    src={item.img}
                    alt={ item.title}
                    // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
                    sizes="50vw"
                    fill={true}
                    priority={index === 0 ? true : false}
                  />
                </div>
                <div className={styles.infoWrapper}>
                  <h2 className={styles.productTitle}>
                    {item.title}
                  </h2>
                  <p className={styles.compositiontionSubTitle}>
                    {dictionary.compositionSubTitle}
                  </p>
                  <ul className={styles.compositionList}>
                    {item.compositionList.map((el, index) => (
                      <li key={index} className={styles.compositionItem}>
                        {el}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.applicationSubTitle}>
                    {dictionary.application}
                  </p>
                  <ul className={styles.applicationList}>
                    {item.applicationList.map((el, index) => (
                      <li key={index} className={styles.applicationItem}>
                        {el}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.deliverySubTitle}>
                    {dictionary.delivery}
                  </p>
                  <ul className={styles.deliveryList}>
                    {item.deliveryList.map((el, index) => (
                      <li key={index} className={styles.deliveryItem}>
                        {el}
                      </li>
                    ))}
                  </ul>
                  {item.slug === "calmit" && <CalmitTable lang={lang} />}
                  {item.slug === "florakalk" && <FlorakalkTable lang={lang} />}
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
