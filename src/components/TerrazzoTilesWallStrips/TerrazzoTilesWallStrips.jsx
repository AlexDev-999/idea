import Image from "next/image";
import BreadCrumbs from "../buttons/BreadCrumbs/BreadCrumbs";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./TerrazzoTilesWallStrips.module.scss";

const TerrazzoTilesWallStrips = ({ lang, dictionary }) => {
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
          sizes="(max-width: 767px) 100vw, (max-width: 1439px) 50vw, 588px"
            fill={true}
            priority={true}
          />
        </div>
        <div className={styles.infoWrapper}>
          <p className={styles.description}>{dictionary.idDescription}</p>
          <ul className={styles.sizesWrapper}>
            {dictionary.idSizes.map((item, index) => (
              <li key={index} className={styles.sizesItem}>
                <p className={styles.sizesText}>{item.title.toUpperCase()}</p>
                <p className={styles.sizesValue}>{item.value}</p>
              </li>
            ))}
          </ul>
          <p className={styles.opportunityText}>
            {dictionary.idOpportunityText}
          </p>
          <ul className={styles.highStripsList}>
            {dictionary.idHighStripsImgs.map((item) => (
              <li key={item.altImg} className={styles.highStripsItem}>
                <Image
                  className={styles.highStripImg}
                  src={item.img}
                  alt={item.altImg}
                  sizes="(max-width: 767px) 50vw, (max-width: 1439px) 25vw, 282px"
                  fill={true}
                  priority={true}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={styles.opportunitySubTitle}>
        {dictionary.idOpportunitySubTitle}
      </p>
      <ul className={styles.roundedStripsList}>
        {dictionary.idRoundedStripsImgs.map((item) => (
          <li key={item.altImg} className={styles.roundedStripsItem}>
            <Image
              className={styles.roundedStripImg}
              src={item.img}
              alt={item.altImg}
              sizes="(max-width: 767px) 50vw, (max-width: 1439px) 33vw, 282px"
              fill={true}
              priority={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TerrazzoTilesWallStrips;
