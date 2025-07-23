import Image from "next/image";
import BackHomeProductsBtn from "@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn";
import DownloadBtn from "@/components/buttons/DownloadBtn/DownloadBtn";
import QuickLimeTable from "@/components/tables/QuickLimeTable/QuickLimeTable";
import SlakedLimeTable from "@/components/tables/SlakedLimeTable/SlakedLimeTable";
import { i18n } from "@/dictionaries/i18n.config";
import { limeData } from "@/data/products/limeData";
import styles from "./LimeSection.module.scss";

const LimeSection = ({ lang, dictionary, buttons }) => {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />
        <h1 className={styles.title}>{dictionary.title}</h1>
        <p className={styles.subscription}>{dictionary.subscription}</p>
        <ul>
          {limeData.map((item, index) => {
            const applicationList =
              lang === i18n.locales[0]
                ? item.applicationListUk
                : item.applicationListEn;
            const deliveryList =
              lang === i18n.locales[0]
                ? item.deliveryListUk
                : item.deliveryListEn;
            return (
              <li key={item.slug} className={styles.productItem}>
                <div className={styles.contentWrapper}>
                  <div className={styles.imgWrapper}>
                    <Image
                      className={styles.img}
                      src={item.img}
                      alt={
                        lang === i18n.locales[0] ? item.titleUk : item.titleEn
                      }
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
                    <p className={styles.productDescription}>
                      {lang === i18n.locales[0]
                        ? item.descriptionUk
                        : item.descriptionEn}
                    </p>
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
                    <div className={styles.techInfoWrapper}>
                      <span className={styles.techInfoSubTitle}>
                        {dictionary.techInfo}
                      </span>
                      <DownloadBtn
                        href={item.pdfPath}
                        text={buttons.downloadBtn}
                      />
                    </div>
                  </div>
                </div>
                {item.slug === "quicklime" && <QuickLimeTable lang={lang} />}
                {item.slug === "slaked-lime" && <SlakedLimeTable lang={lang} />}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default LimeSection;
