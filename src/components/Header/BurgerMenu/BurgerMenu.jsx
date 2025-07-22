"use client";
import React, { useContext, useEffect } from "react";
import { SiteContext } from "@/context/SiteContext";
import Navigation from "@/components/Navigation/Navigation";
import styles from "./BurgerMenu.module.scss";

const BurgerMenu = ({ lang }) => {
  const { mobileMenu, mobileMenuContent } = useContext(SiteContext);

  useEffect(() => {
    if (window !== undefined && mobileMenu) {
      document.body.classList.add("stopBodyScroll");
    }

    return () => {
      document.body.classList.remove("stopBodyScroll");
    };
  }, [mobileMenu]);

  if (!mobileMenu) {
    return;
  }

  return (
    <div className={styles.burgerMenuFrame}>
      <div
        className={
          mobileMenuContent
            ? `${styles.burgerMenuSection} ${styles.burgerMenuSectionVisible}`
            : `${styles.burgerMenuSection} ${styles.burgerMenuSectionHidden}`
        }
      >
        <div className="container">
          <Navigation lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
