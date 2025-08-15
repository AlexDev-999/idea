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
    // data-menu-root для закриття бургер-меню (useEffect в BurgerBtn)
    <div className={styles.burgerMenuFrame} data-menu-root>
      <div
        className={
          mobileMenuContent
            ? `${styles.burgerMenuSection} ${styles.burgerMenuSectionVisible}`
            : `${styles.burgerMenuSection} ${styles.burgerMenuSectionHidden}`
        }
        data-menu-root
      >        
        <div className="container" data-menu-root>
          <Navigation lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
