import Image from 'next/image';
import Link from 'next/link';
import { i18n } from '@/dictionaries/i18n.config';
import CustomLink from '../CustomLink/CustomLink';
import styles from './ProductsList.module.scss';

const ProductsList = ({ dictionary, href, lang, buttons }) => {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}/${href}`;

  return (
    <ul className={styles.list}>
      {dictionary.productsData.map((item, index) => (
        <li key={index} className={styles.item}>
          <Link className={styles.imgContainer} href={`${path}/${item.slug}`}>
            <Image
              src={href === 'dekorativnij-kamin' ? item.images[0] : item.image}
              alt={item.title}
              fill={true}
              sizes="(max-width: 767px) 318px, (max-width: 1439px) 222px, 1200px"
            />
          </Link>
          <div className={styles.content}>
            <h3 className={styles.subtitle}>{item.title}</h3>
            <CustomLink
              linkCustomClass={styles.moreBtn}
              href={`/${href}/${item.slug}`}
              lang={lang}
              text={buttons.moreBtn}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
