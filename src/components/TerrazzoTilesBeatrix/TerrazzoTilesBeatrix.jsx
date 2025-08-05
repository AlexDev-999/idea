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
            sizes="(max-width: 767px) 100vw, (max-width: 1439px) 50vw, 588px"
            fill={true}
            priority={true}
          />
          <p className={styles.mainArtName}>{dictionary.idArtName}</p>
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
                <ul className={styles.sizesValuesList}>
                  {item.sizesValues.map((el) => (
                    <li key={el} className={styles.sizesValue}>
                      {el}
                    </li>
                  ))}
                </ul>
                <p className={styles.sizesText}>
                  {item.weightTitle.toUpperCase()}
                </p>
                <p className={styles.sizesValue}>{item.weightValue}</p>
              </li>
            ))}
          </ul>
          {dictionary.idDescriptionList && (
            <ul>
              {dictionary.idDescriptionList.map((item) => (
                <li key={item} className={styles.descriptionItem}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <ul className={styles.anotherTypesList}>
        {dictionary.idImages.map((item) => (
          <li key={item.altImg} className={styles.anotherTypesItem}>
            <Image
              className={styles.anotherTypeImg}
              src={item.path}
              alt={item.altImg}
              sizes="(max-width: 767px) 50vw, (max-width: 1439px) 33vw, 282px"
              fill={true}
              priority={true}
            />
            <p className={styles.artName}>{item.artName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TerrazzoTilesBeatrix;
