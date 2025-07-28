import Image from 'next/image';
import styles from './TerrazzoTilesClassic.module.scss';

const TerrazzoTilesClassic = ({ lang, dictionary, buttons }) => {
  return (
    <div className={`container`}>
      <div className={styles.container}>
        <figure className={styles.imgContainer}>
          <Image
            src={dictionary.cardImg}
            alt={dictionary.cardTitle}
            fill={true}
          />
          <p className={styles.imgValue}>{dictionary.imgCode}</p>
        </figure>
        <div>
          <h1 className={styles.title}>
            {dictionary.cardSubTitle} {dictionary.cardTitle}
          </h1>
          <ul className={styles.descList}>
            {dictionary.cardDescription.map((desc, index) => (
              <li key={index}>
                {index === 0 && (
                  <h3 className={styles.subtitle}>{dictionary.cardTitle}</h3>
                )}
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className={styles.imgListContainer}>
        {dictionary.images.map((img, index) => (
          <li key={index} className={styles.imgList}>
            <Image src={img} alt={img} fill={true} />
            <p className={styles.imgValue} key={index}>
              {dictionary.imagesValue[index]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TerrazzoTilesClassic;
