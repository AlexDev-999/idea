import Image from "next/image";
import BreadCrumbs from "../buttons/BreadCrumbs/BreadCrumbs";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./TerrazzoTilesBeatrix.module.scss";

const TerrazzoTilesBeatrix = ({ lang, dictionary }) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const parentPagePath = isDefaultLang
    ? "/plitka-teraczo"
    : `/${lang}/plitka-teraczo`;

  return (
    <div className="container">
      <BreadCrumbs
        href={parentPagePath}
        backTitle={dictionary.navParrentPage}
        nowtitle={dictionary.navCurrentPage}
      />
      <h1 className={styles.title}>{dictionary.idTitle}</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src={dictionary.idMainImg}
            alt={dictionary.idTitle}
            // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
            sizes="50vw"
            fill={true}
            priority={true}
          />
        </div>
        <div className={styles.infoWrapper}>
          <ul
            className={
              dictionary.idDescriptionList
                ? `${styles.sizesWrapper} ${styles.indent}`
                : styles.sizesWrapper
            }
          >
            {dictionary.idSizes.map((item, index) => (
              <li key={index} className={styles.sizesItem}>
                <p className={styles.sizesText}>
                  {item.sizesTitle.toUpperCase()}
                </p>
                <p className={styles.sizesValue}>{item.sizesValue}</p>
                <p className={styles.sizesText}>
                  {item.weightTitle.toUpperCase()}
                </p>
                <p className={styles.sizesValue}>{item.weightValue}</p>
              </li>
            ))}
          </ul>
          {dictionary.idDescriptionList && (
            <ul className={styles.descriptionList}>
              {dictionary.idDescriptionList.map((item) => (
                <li key={item} className={styles.descriptionItem}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <ul className={styles.roundedStripsList}>
        {dictionary.idImages.map((item) => (
          <li key={item.altImg} className={styles.roundedStripsItem}>
            <Image
              className={styles.roundedStripImg}
              src={item.path}
              alt={item.altImg}
              // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
              sizes="25vw"
              fill={true}
              priority={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TerrazzoTilesBeatrix;
