import Image from "next/image";
import BackHomeProductsBtn from "@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn";
import { i18n } from "@/dictionaries/i18n.config";
import { terrazzoTilesWallStripsData } from "@/data/products/terrazzoTilesWallStripsData";
import styles from './TerrazzoTilesWallStrips.module.scss';

const TerrazzoTilesWallStrips = ({lang, dictionary, buttons}) => {
  return (
    <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />
        <h1 className={styles.title}>{dictionary.title}</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.img}
              src={terrazzoTilesWallStripsData.mainImg}
              alt={terrazzoTilesWallStripsData.altMainImg               
              }
              // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
              sizes="50vw"
              fill={true}
              priority={true}
            />
          </div>
          <div className={styles.infoWrapper}>           
            <p className={styles.description}>
              {dictionary.description}
            </p>      
            <ul className={styles.sizesWrapper}>{dictionary.sizesData.map((item, index)=>
              <li key={index} className={styles.sizesItem}>
                <p className={styles.sizesText}>{item.title.toUpperCase()}</p>
                <p className={styles.sizesValue}>{item.value}</p>
                </li>)}                
            </ul>    
            <p className={styles.opportunityText}>{dictionary.opportunityText}</p>
            <ul className={styles.highStripsList}>
              {terrazzoTilesWallStripsData.highStripsImgs.map((item) => (
                <li key={item.altImg} className={styles.highStripsItem}>
                     <Image
              className={styles.highStripImg}
              src={item.img}
              alt={item.altImg               
              }
              // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
              sizes="25vw"
              fill={true}
              priority={true}
            />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className={styles.opportunitySubTitle}>{dictionary.opportunitySubTitle}</p>
        <ul className={styles.roundedStripsList}>
            {terrazzoTilesWallStripsData.roundedStripsImgs.map((item) => (
                <li key={item.altImg} className={styles.roundedStripsItem}>
                     <Image
              className={styles.roundedStripImg}
              src={item.img}
              alt={item.altImg               
              }
              // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
              sizes="25vw"
              fill={true}
              priority={true}
            />
                </li>
              ))}
        </ul>
      </div>
      )
}

export default TerrazzoTilesWallStrips