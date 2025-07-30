'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { i18n } from '@/dictionaries/i18n.config';
import { heroImages } from '@/data/heroImages';

import styles from './HomeHeroSection.module.scss';

const HomeHeroSection = ({ lang, dictionary }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const section = document.getElementById('products');
    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  const isDefaultLang = lang === i18n.defaultLocale;
  const aboutUsPagePath = isDefaultLang ? '/pro-nas' : `/${lang}/pro-nas`;

  return (
    <section className={styles.section}>
      {heroImages.map((src, index) => (
        <div
          key={index}
          className={`${styles.background} ${
            index === currentIndex ? styles.active : ''
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(45, 48, 55, 0.45), rgba(45, 48, 55, 0.45)), url(${src})`,
          }}
        >
          <div className={`container`}>
            <h1 className={styles.title}>{dictionary.title}</h1>
            <h3 className={styles.partners}>
              • Calmit • Danucem •{' '}
              <span>
                <br />
              </span>{' '}
              <span>•</span> Xella • Cidemat •
            </h3>
          </div>
          <div>
            <div className={styles.btnContainer}>
              <button
                onClick={handleScroll}
                className={styles.productsBtn + ' ' + styles.buttons}
                type="button"
                aria-label="arrow-btn"
              >
                {dictionary.productsBtn}
              </button>
              <Link
                href={aboutUsPagePath}
                className={styles.aboutAsBtn + ' ' + styles.buttons}
              >
                {dictionary.aboutAsBtn}
              </Link>
            </div>
            <div className={styles.pagination}>
              {heroImages.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${
                    index === currentIndex ? styles.activeDot : ''
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomeHeroSection;
