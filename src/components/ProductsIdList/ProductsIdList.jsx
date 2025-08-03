import Image from 'next/image';
import styles from './ProductsIdList.module.scss';

const ProductsIdList = ({ data }) => {
  return (
    <ul className={styles.imgListContainer}>
      {data.images.slice(1).map((img, index) => (
        <li key={index + 1} className={styles.imgList}>
          <Image
            src={img}
            alt={`${data.title ? data.title : data.cardTitle} ${index}`}
            fill={true}
            sizes="(max-width: 767px) 152px, (max-width: 1439px) 224px, 1200px"
          />
          {data.imageCode && (
            <p
              className={styles.imgValue + ' ' + styles.imgCodeValue}
              key={index + 1}
            >
              {data.imageCode.slice(1)[index]}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProductsIdList;
