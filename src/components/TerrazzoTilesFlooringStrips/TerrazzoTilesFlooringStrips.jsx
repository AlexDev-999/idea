import Image from "next/image";
import BackHomeProductsBtn from "@/components/buttons/BackHomeProductsBtn/BackHomeProductsBtn";
import styles from './TerrazzoTilesFlooringStrips.module.scss';

const TerrazzoTilesFlooringStrips = ({lang, dictionary, buttons}) => {
  return (
    <div className="container">
        <BackHomeProductsBtn lang={lang} text={buttons.backHomeProductsBtn} />
        <h1 className={styles.title}>{dictionary.idTitle}</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.img}
              src={dictionary.idMainImg}
              alt={dictionary.idTitle}
              // sizes="(max-width: 767px) 95vw, (max-width: 1439px) 42vw, 1200px"
              sizes="50vw"
              fill={true}
              priority={true}
            />
          </div>
          <div className={styles.infoWrapper}>          
                
            <ul className={styles.sizesWrapper}>{dictionary.idSizes.map((item, index)=>
              <li key={index} className={styles.sizesItem}>
                <p className={styles.sizesText}>{item.title.toUpperCase()}</p>
                <p className={styles.sizesValue}>{item.value}</p>
                </li>)}                
            </ul>  
            <p className={styles.description}>
              {dictionary.idText}
            </p>            
          </div>
        </div>
    
        <ul className={styles.roundedStripsList}>
            {dictionary.idImages.map((item) => (
                <li key={item.altImg} className={styles.roundedStripsItem}>
                     <Image
              className={styles.roundedStripImg}
              src={item.path}
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

export default TerrazzoTilesFlooringStrips