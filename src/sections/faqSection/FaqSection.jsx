'use client';

import { useState } from 'react';
import styles from './FaqSection.module.scss';

const FaqSection = ({ lang, dictionary, data }) => {
  const [openItems, setOpenItems] = useState([]);

  const handleOpen = (id) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(id)) {
        return prevOpenItems.filter((item) => item !== id);
      } else {
        return [...prevOpenItems, id];
      }
    });
  };
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>{dictionary.title}</h1>
        <h3 className={styles.subtitle}>{dictionary.subtitle}</h3>
      </div>
    </section>
  );
};

export default FaqSection;
