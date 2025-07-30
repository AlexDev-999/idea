import BreadCrumbs from '@/components/buttons/BreadCrumbs/BreadCrumbs';
import Image from 'next/image';
import styles from './DecorativeStoneIdSection.module.scss';

const DecorativeStoneIdSection = ({ lang, dictionary, data }) => {
  return (
    <section className={styles.section}>
      <div>
        <BreadCrumbs
          href="/dekorativnij-kamin"
          backTitle={dictionary.title}
          nowtitle={data.title}
        />
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.container}>
          <div className={styles.productsContainer}>
            <figure className={styles.imgContainer}>
              <Image src={data.images[0]} alt={data.title} fill={true} />
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
                  <ul className={styles.applicationValue + ' ' + styles.dot}>
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
                  <ul className={styles.applicationValue + ' ' + styles.number}>
                    {data.packagingData.value.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
          <ul className={styles.imgListContainer}>
            {data.images.slice(1).map((img, index) => (
              <li key={index + 1} className={styles.imgList}>
                <Image src={img} alt={data.title} fill={true} />
                {data.imageCode && (
                  <p className={styles.imgValue} key={index + 1}>
                    {data.imageCode.slice(1)[index]}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DecorativeStoneIdSection;
