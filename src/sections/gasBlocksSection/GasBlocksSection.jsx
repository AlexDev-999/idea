import Image from "next/image";
import BackHomeProductsBtn from "@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn";
import GasBlocksYtongTable from "@/components/tables/GasBlocksYtongTable/GasBlocksYtongTable";
import GasBlocksGazobetTable from "@/components/tables/GasBlocksGazobetTable/GasBlocksGazobetTable";
import styles from "./GasBlocksSection.module.scss";

const GasBlocksSection = ({ lang, dictionary, buttons }) => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />
        <h1 className={styles.title}>{dictionary.title}</h1>
        <p className={styles.description}>
          <span className="boldText">{dictionary.description_1_Bold}</span>
          {dictionary.description_1}
        </p>
        <p className={`${styles.description} ${styles.lastDescription}`}>
          {dictionary.description_2}
        </p>
        <ul className={styles.productsList}>
          {dictionary.productsData.map((item, index) => (
            <li key={item.slug} className={styles.productItem}>
              <div className={styles.contentWrapper}>
                <div className={styles.imgWrapper}>
                  <Image
                    className={styles.img}
                    src={item.img}
                    alt={item.title}
                   sizes="(max-width: 767px) 100vw, (max-width: 1439px) 50vw, 588px"
                    fill={true}
                    priority={index === 0 ? true : false}
                  />
                </div>
                <div className={styles.infoWrapper}>
                  <h2 className={styles.productTitle}>{item.title}</h2>
                  <p className={styles.productDescription}>
                    <span className="boldText">{item.descriptionBold}</span>
                    {item.description}
                  </p>
                </div>
              </div>
              {item.slug === "ytong" && (
                <GasBlocksYtongTable lang={lang} tableData={item.tableData} />
              )}
            </li>
          ))}
        </ul>
        <p className={styles.anotherProductsSubTitle}>
          {dictionary.anotherProductsSubTitle}
        </p>
        <GasBlocksGazobetTable
          lang={lang}
          tableData={dictionary.gazobetTableData}
        />
      </div>
    </section>
  );
};

export default GasBlocksSection;
