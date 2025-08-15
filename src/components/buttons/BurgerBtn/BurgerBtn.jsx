"use client";
import React, { useContext, useEffect, useRef } from "react";
import { SiteContext } from "@/context/SiteContext";
import styles from "./BurgerBtn.module.scss";

const BurgerBtn = () => {
  const { mobileMenu, setMobileMenu, setMobileMenuContent, setSubMenu } =
    useContext(SiteContext);
  const burgerRef = useRef(null);

  const toggleMobileMenu = () => {
    if (mobileMenu) {
      setMobileMenuContent(false);

      setTimeout(() => {
        setMobileMenu(false);
      }, 200);
    } else {
      setMobileMenu(true);

      setTimeout(() => {
        setMobileMenuContent(true);
      }, 200);
    }
  };

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => { 
     const clickedInsideButton = burgerRef.current?.contains(event.target);
     const clickedInsideMenu = !!event.target.closest('[data-menu-root]');
     const whitelist = !!event.target.closest('[data-no-close]');

      if (!clickedInsideButton && !clickedInsideMenu && !whitelist) {
        setMobileMenuContent(false);

        setTimeout(() => {
          setMobileMenu(false);
        }, 200);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <button
      className={styles.burgerBtn}
      onClick={() => {
        setSubMenu(false);
        toggleMobileMenu();
      }}
      ref={burgerRef}
    >
      <svg>
        <use href="/sprite.svg#icon-menu"></use>
      </svg>
    </button>
  );
};

export default BurgerBtn;
