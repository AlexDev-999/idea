import Image from 'next/image';
import BackHomeProductsBtn from '@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn';
import styles from './WhiteCementSection.module.scss';

const WhiteCementSection = ({ lang, dictionary, buttons }) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />

        <h1 className={styles.title}>{dictionary.title}</h1>
        <h3 className={styles.subtitle}>{dictionary.description}</h3>

        <ul className={styles.list}>
          {dictionary.productsData.map((item, index) => (
            <li key={index} className={styles.contentItem}>
              <figure className={styles.imgContainer}>
                <Image src={item.image} fill={true} alt={item.title} />
              </figure>
              <div>
                <h2 className={styles.contentTitle}>{item.title}</h2>
                {item.clinker && (
                  <>
                    <h3 className={styles.contentSubtitle}>
                      {dictionary.clinkerTitle}
                    </h3>
                    <p className={styles.contentDesc}>{item.clinker}</p>
                  </>
                )}
                {item.blastFurnaceSlag && (
                  <>
                    <h3 className={styles.contentSubtitle}>
                      {dictionary.blastFurnaceSlagTitle}
                    </h3>
                    <p className={styles.contentDesc}>
                      {item.blastFurnaceSlag}
                    </p>
                  </>
                )}
                {item.limestone && (
                  <>
                    <h3 className={styles.contentSubtitle}>
                      {dictionary.limestoneTitle}
                    </h3>
                    <p className={styles.contentDesc}>{item.limestone}</p>
                  </>
                )}
                {item.additives && (
                  <>
                    <h3 className={styles.contentSubtitle}>
                      {dictionary.additivesTitle}
                    </h3>
                    <p
                      className={
                        styles.contentDesc + ' ' + styles.contentDescText
                      }
                    >
                      {item.additives}
                    </p>
                  </>
                )}
                <p
                  className={styles.contentDesc + ' ' + styles.contentDescText}
                >
                  {item.description}
                </p>
                <h3
                  className={
                    styles.contentSubtitle + ' ' + styles.contentSubtitleRetreat
                  }
                >
                  {dictionary.deliveryOptions}
                </h3>
                <ol className={styles.contentDeliveryOptions}>
                  {item.deliveryOptions.map((el, index) => (
                    <li key={index} className={styles.contentDesc}>
                      {el}
                    </li>
                  ))}
                </ol>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhiteCementSection;
