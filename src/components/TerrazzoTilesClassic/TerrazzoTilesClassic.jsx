'use client';

import { useWindowResize } from '@/hooks/windowResize';
import Image from 'next/image';
import BreadCrumbs from '../buttons/BreadCrumbs/BreadCrumbs';
import styles from './TerrazzoTilesClassic.module.scss';

const TerrazzoTilesClassic = ({ lang, dictionary, buttons }) => {
  const { isTablet, isLaptop } = useWindowResize();

  const firstTwoDescriptions = dictionary.cardDescription.slice(0, 2);
  const lastDescriptions = dictionary.cardDescription.slice(2);
  return (
    <div className={`container`}>
      <BreadCrumbs
        href="/plitka-teraczo"
        backTitle={dictionary.cardSubTitle}
        nowtitle={dictionary.cardTitle}
      />
      <div className={styles.container}>
        <figure className={styles.imgContainer}>
          <Image
            src={dictionary.cardImg}
            alt={dictionary.cardTitle}
            fill={true}
            sizes="(max-width: 767px) 320px, (max-width: 1439px) 355px, 1200px"
          />
          <p className={styles.imgValue}>{dictionary.imgCode}</p>
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
                    {index === 0 && dictionary.cardTitle}{' '}
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
          <ul className={styles.descList + ' ' + styles.retreat}>
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

      <ul className={styles.imgListContainer}>
        {dictionary.images.map((img, index) => (
          <li key={index} className={styles.imgList}>
            <Image
              src={img}
              alt={img}
              fill={true}
              sizes="(max-width: 767px) 152px, (max-width: 1439px) 224px, 1200px"
            />
            <p
              className={styles.imgValue + ' ' + styles.imgCodeValue}
              key={index}
            >
              {dictionary.imagesValue[index]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TerrazzoTilesClassic;
