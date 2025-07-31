import Image from "next/image";
import BackHomeProductsBtn from "@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn";
import OpenPdfBtn from "@/components/buttons/OpenPdfBtn/OpenPdfBtn";
import QuickLimeTable from "@/components/tables/QuickLimeTable/QuickLimeTable";
import SlakedLimeTable from "@/components/tables/SlakedLimeTable/SlakedLimeTable";
import styles from "./LimeSection.module.scss";

const LimeSection = ({ lang, dictionary, buttons }) => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />
        <h1 className={styles.title}>{dictionary.title}</h1>
        <p className={styles.description}>{dictionary.description}</p>
        <ul>
          {dictionary.productsData.map((item, index) => (
            <li key={item.slug} className={styles.productItem}>
              <div className={styles.contentWrapper}>
                <div className={styles.imgWrapper}>
                  <Image
                    className={styles.img}
                    src={item.img}
                    alt={item.title}
                    // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
                    sizes="50vw"
                    fill={true}
                    priority={index === 0 ? true : false}
                  />
                </div>
                <div className={styles.infoWrapper}>
                  <h2 className={styles.productTitle}>{item.title}</h2>
                  <p className={styles.productDescription}>
                    {item.description}
                  </p>
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
                  <div className={styles.techInfoWrapper}>
                    <span className={styles.techInfoSubTitle}>
                      {dictionary.techInfo}
                    </span>
                    <OpenPdfBtn href={item.pdfPath} text={buttons.openPdfBtn} />
                  </div>
                </div>
              </div>
              {item.slug === "quicklime" && (
                <QuickLimeTable lang={lang} tableData={item.tableData} />
              )}
              {item.slug === "slaked-lime" && (
                <SlakedLimeTable lang={lang} tableData={item.tableData} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LimeSection;
