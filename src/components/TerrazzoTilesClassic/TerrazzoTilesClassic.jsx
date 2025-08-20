"use client";

import { useWindowResize } from "@/hooks/windowResize";
import Image from "next/image";
import BreadCrumbs from "../buttons/BreadCrumbs/BreadCrumbs";
import { i18n } from "@/dictionaries/i18n.config";

import styles from "./TerrazzoTilesClassic.module.scss";
import ProductsIdList from "../ProductsIdList/ProductsIdList";

const TerrazzoTilesClassic = ({ lang, dictionary }) => {
  const { isTablet, isLaptop } = useWindowResize();

  const firstTwoDescriptions = dictionary.cardDescription.slice(0, 2);
  const lastDescriptions = dictionary.cardDescription.slice(2);

  const isDefaultLang = lang === i18n.defaultLocale;
  const parentPagePath = isDefaultLang
    ? "/plitka-teraczo"
    : `/${lang}/plitka-teraczo`;

  return (
    <div className={`container`}>
      <BreadCrumbs
        href={parentPagePath}
        backTitle={dictionary.cardSubTitle}
        nowtitle={dictionary.cardTitle}
      />
      <div className={styles.container}>
        <figure className={styles.imgContainer}>
          <Image
            src={dictionary.images[0]}
            alt={dictionary.cardTitle}
            fill={true}
            sizes="(max-width: 767px) 320px, (max-width: 1439px) 355px, 1200px"
          />
          <p className={styles.imgValue}>{dictionary.imageCode[0]}</p>
        </figure>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            {dictionary.cardSubTitle} {dictionary.cardTitle}
          </h1>
          <ul className={styles.idSizesContainer}>
            {dictionary.idSizes.map(({ title, value }, index) => (
              <li key={index} className={styles.idSizesItem}>
                <h3>{title.toUpperCase()}</h3>
                <p>{value}</p>
              </li>
            ))}
          </ul>
          <ul className={styles.descList}>
            {(isTablet || isLaptop
              ? firstTwoDescriptions
              : dictionary.cardDescription
            ).map((desc, index) => (
              <li key={index}>
                <p>
                  <span className={styles.subtitle}>
                    {index === 0 && dictionary.cardTitle}{" "}
                  </span>
                  {desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isTablet || isLaptop ? (
        lastDescriptions.length > 0 && (
          <ul className={styles.descList + " " + styles.retreat}>
            {lastDescriptions.map((desc, index) => (
              <li key={index + 2}>
                <p>{desc}</p>
              </li>
            ))}
          </ul>
        )
      ) : (
        <></>
      )}
      <ProductsIdList data={dictionary} />
    </div>
  );
};

export default TerrazzoTilesClassic;
