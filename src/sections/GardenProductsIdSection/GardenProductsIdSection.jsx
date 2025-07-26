import BackHomeProductsBtn from '@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn';
import { i18n } from '@/dictionaries/i18n.config';
import Image from 'next/image';
import styles from './GardenProductsIdSection.module.scss';

const GardenProductsIdSection = ({ lang, dictionary, buttons, data }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />

        <h1 className={styles.title}>
          {lang === i18n.locales[0] ? data.titleUk : data.titleEn}
        </h1>
        <div className={styles.container}>
          <div className={styles.productsContainer}>
            <figure className={styles.imgContainer}>
              <Image
                src={data.image}
                alt={lang === i18n.locales[0] ? data.titleUk : data.titleEn}
                fill={true}
              />
            </figure>
            <div className={styles.content}>
              <p className={styles.desc}>
                {lang === i18n.locales[0]
                  ? data.descriptionUk
                  : data.descriptionEn}
              </p>
              {data.diameterUk && (
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <h3>{dictionary.diameter.toUpperCase()}</h3>
                    <p>
                      {lang === i18n.locales[0]
                        ? data.diameterUk
                        : data.diameterEn}
                    </p>
                  </li>
                  <li className={styles.item}>
                    <h3>{dictionary.height.toUpperCase()}</h3>
                    <p>
                      {lang === i18n.locales[0] ? data.heightUk : data.heightEn}
                    </p>
                  </li>
                  <li className={styles.item}>
                    <h3>{dictionary.weight.toUpperCase()}</h3>
                    <p>
                      {lang === i18n.locales[0] ? data.weightUk : data.weightEn}
                    </p>
                  </li>
                </ul>
              )}
              {data.slug === 'ConcreteGardenSteps' && (
                <div className={styles.imagesList}>
                  {data.images.map((img, index) => (
                    <figure key={index} className={styles.images}>
                      <Image
                        src={img}
                        alt={`${
                          lang === i18n.locales[0] ? data.titleUk : data.titleEn
                        } ${index}`}
                        fill={true}
                      />
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </div>
          {data.slug !== 'ConcreteGardenSteps' && (
            <div className={styles.imagesList}>
              {data.images.map((img, index) => (
                <figure key={index} className={styles.images}>
                  <Image
                    src={img}
                    alt={`${
                      lang === i18n.locales[0] ? data.titleUk : data.titleEn
                    } ${index}`}
                    fill={true}
                  />
                  {data.titles && (
                    <p className={styles.imgDesc} key={index}>
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
