import { notFound } from "next/navigation";
import Image from "next/image";
import BreadCrumbs from "@/components/buttons/BreadCrumbs/BreadCrumbs";
import ProductsIdList from "@/components/ProductsIdList/ProductsIdList";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./DecorativeStoneIdSection.module.scss";

const DecorativeStoneIdSection = ({ lang, dictionary, data }) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const parentPagePath = isDefaultLang
    ? "/dekorativnij-kamin"
    : `/${lang}/dekorativnij-kamin`;

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
                src={data.images[0]}
                alt={data.title}
                fill={true}
                sizes="(max-width: 767px) 320px, (max-width: 1439px) 352px, 1200px"
              />
              {data.imageCode && (
                <p className={styles.imgValue}>{data.imageCode[0]}</p>
              )}
            </figure>
            <div>
              {data.description && (
                <ul className={styles.descContainer}>
                  {data.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              {data.applicationData && (
                <>
                  <h3 className={styles.applicationTitle}>
                    {data.applicationData.title}:
                  </h3>
                  <ul className={styles.applicationValue + " " + styles.dot}>
                    {data.applicationData.value.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {data.packagingData && (
                <>
                  <h3 className={styles.applicationTitle}>
                    {data.packagingData.title}:
                  </h3>
                  <ul className={styles.applicationValue + " " + styles.number}>
                    {data.packagingData.value.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
          <ProductsIdList data={data} />
        </div>
      </div>
    </section>
  );
};

export default DecorativeStoneIdSection;
