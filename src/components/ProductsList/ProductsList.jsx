import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductsList.module.scss';

const ProductsList = ({ dictionary, href }) => {
  return (
    <ul className={styles.list}>
      {dictionary.productsData.map((item, index) => (
        <li key={index} className={styles.item}>
          <figure className={styles.imgContainer}>
            <Image
              src={href === 'dekorativnij-kamin' ? item.images[0] : item.image}
              alt={item.title}
              fill={true}
            />
          </figure>
          <div className={styles.content}>
            <h3 className={styles.subtitle}>{item.title}</h3>
            <Link href={`${href}/${item.slug}`} className={styles.moreBtn}>
              {dictionary.more}
              <svg className={styles.arrowIcon}>
                <use href="/sprite.svg#icon-arrow-right" />
              </svg>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
