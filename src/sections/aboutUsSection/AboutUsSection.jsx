'use client';

import { useWindowResize } from '@/hooks/windowResize';
import Image from 'next/image';
import styles from './AboutUsSection.module.scss';

const AboutUsSection = ({ lang, dictionary }) => {
  const { isDesktop } = useWindowResize();
  return (
    <section className={styles.section}>
      <div className="container">
        {isDesktop && <h1 className={styles.title}>{dictionary.title}</h1>}
        <div className={styles.contentContainer}>
          <div>
            {!isDesktop && <h1 className={styles.title}>{dictionary.title}</h1>}
            <h3 className={styles.subtitle}>{dictionary.subtitle}</h3>
          </div>
          <figure className={styles.imgContainer}>
            <Image
              src={dictionary.images[0]}
              alt={dictionary.title}
              fill={true}
              sizes="(max-width: 767px) 320px, (max-width: 1439px) 352px, 1200px"
            />
          </figure>
        </div>
        <ul className={styles.imgList}>
          {dictionary.images.slice(1).map((img, index) => (
            <li key={index} className={styles.imgItem}>
              <Image
                src={img}
                alt={`${dictionary.title} ${index}`}
                fill={true}
                sizes="(max-width: 767px) 320px, (max-width: 1439px) 337px, 1200px"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUsSection;
