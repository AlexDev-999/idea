"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import BreadCrumbs from "@/components/buttons/BreadCrumbs/BreadCrumbs";
import { i18n } from "@/dictionaries/i18n.config";
import { useWindowResize } from "@/hooks/windowResize";
import styles from "./GardenProductsIdSection.module.scss";

const GardenProductsIdSection = ({ lang, dictionary, data }) => {
  const { isDesktop } = useWindowResize();

  const isDefaultLang = lang === i18n.defaultLocale;
  const parentPagePath = isDefaultLang
    ? "/tovari-dlya-sadu"
    : `/${lang}/tovari-dlya-sadu`;

  if (!data) {
    // вот тут сработает [lang]/not-found.js
    notFound();
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <BreadCrumbs
          href={parentPagePath}
          backTitle={dictionary.title}
          nowtitle={data.title}
        />

        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.container}>
          <div className={styles.productsContainer}>
            <figure className={styles.imgContainer}>
              <Image
                src={data.image}
                alt={data.title}
                fill={true}
                sizes="(max-width: 767px) 320px, (max-width: 1439px) 352px, 1200px"
              />
            </figure>
            <div className={styles.content}>
              <p className={styles.desc}>{data.description}</p>
              <ul
                className={
                  data.sizes
                    ? styles.listSizes + " " + styles.list
                    : styles.list
                }
              >
                {data.diameter && (
                  <li className={styles.item}>
                    <h3>{dictionary.diameter.toUpperCase()}</h3>
                    <p>{data.diameter}</p>
                  </li>
                )}
                {data.height && (
                  <li className={styles.item}>
                    <h3>{dictionary.height.toUpperCase()}</h3>
                    <p>{data.height}</p>
                  </li>
                )}
                {data.weight && (
                  <li className={styles.item}>
                    <h3>{dictionary.weight.toUpperCase()}</h3>
                    <p>{data.weight}</p>
                  </li>
                )}
                {data.sizes && (
                  <li className={styles.item}>
                    <h3>{dictionary.sizesTitle.toUpperCase()}</h3>
                    <p>{data.sizes}</p>
                  </li>
                )}
              </ul>

              {isDesktop ? (
                data.slug === "concrete-garden-steps" && (
                  <div
                    className={
                      styles.imagesList + " " + styles.concreteGardenStepsImages
                    }
                  >
                    {data.images.map((img, index) => (
                      <figure key={index} className={styles.images}>
                        <Image
                          src={img}
                          alt={`${data.title} ${index}`}
                          fill={true}
                          sizes="(max-width: 767px) 152px, (max-width: 1439px) 224px, 1200px"
                        />
                      </figure>
                    ))}
                  </div>
                )
              ) : (
                <></>
              )}
            </div>
          </div>
          {isDesktop ? (
            data.slug !== "concrete-garden-steps" && (
              <div className={styles.imagesList}>
                {data.images.map((img, index) => (
                  <figure key={index} className={styles.images}>
                    <Image
                      src={img}
                      alt={`${data.title} ${index}`}
                      fill={true}
                      sizes="(max-width: 767px) 152px, (max-width: 1439px) 224px, 1200px"
                    />
                    {data.titles && (
                      <p
                        className={styles.imgDesc + " " + styles.imgCodeValue}
                        key={index}
                      >
                        {data.titles[index]}
                      </p>
                    )}
                  </figure>
                ))}
              </div>
            )
          ) : (
            <div className={styles.imagesList}>
              {data.images.map((img, index) => (
                <figure key={index} className={styles.images}>
                  <Image
                    src={img}
                    alt={`${data.title} ${index}`}
                    fill={true}
                    sizes="(max-width: 767px) 152px, (max-width: 1439px) 224px, 1200px"
                  />
                  {data.titles && (
                    <p
                      className={styles.imgDesc + " " + styles.imgCodeValue}
                      key={index}
                    >
                      {data.titles[index]}
                    </p>
                  )}
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GardenProductsIdSection;
