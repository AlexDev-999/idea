"use client";

import { useEffect, useState } from "react";
import { scrollToTop } from "@/helpers/scrollToTop";

import styles from "./ToTopBtn.module.scss";

const ToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={isVisible ? styles.toTopBtn : styles.toTopBtnHidden}
      title="Кнопка до верху сторінки"
      aria-label="Кнопка до гори"
    >
      <svg className={styles.svg}>
        <use href="/sprite.svg#icon-schevron_right" />
      </svg>
    </button>
  );
};

export default ToTopBtn;
