import BackHomeProductsBtn from '@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn';
import Image from 'next/image';
import styles from './GardenProductsIdSection.module.scss';

const GardenProductsIdSection = ({ lang, dictionary, buttons, data }) => {
  return (
    <section className={styles.section}>
      <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />

        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.container}>
          <div className={styles.productsContainer}>
            <figure className={styles.imgContainer}>
              <Image src={data.image} alt={data.title} fill={true} />
            </figure>
            <div className={styles.content}>
              <p className={styles.desc}>{data.description}</p>
              {data.diameter && (
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <h3>{dictionary.diameter.toUpperCase()}</h3>
                    <p>{data.diameter}</p>
                  </li>
                  <li className={styles.item}>
                    <h3>{dictionary.height.toUpperCase()}</h3>
                    <p>{data.height}</p>
                  </li>
                  <li className={styles.item}>
                    <h3>{dictionary.weight.toUpperCase()}</h3>
                    <p>{data.weight}</p>
                  </li>
                </ul>
              )}
              {data.slug === 'concrete-garden-steps' && (
                <div className={styles.imagesList}>
                  {data.images.map((img, index) => (
                    <figure key={index} className={styles.images}>
                      <Image
                        src={img}
                        alt={`${data.title} ${index}`}
                        fill={true}
                      />
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </div>
          {data.slug !== 'concrete-garden-steps' && (
            <div className={styles.imagesList}>
              {data.images.map((img, index) => (
                <figure key={index} className={styles.images}>
                  <Image src={img} alt={`${data.title} ${index}`} fill={true} />
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
