"use client";
import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SiteContext } from "@/context/SiteContext";
import { i18n } from "@/dictionaries/i18n.config";
import { useWindowResize } from "@/hooks/windowResize";
import { headerProductsData, navLinksData } from "@/data/navLinksData";
import styles from "./HeaderNav.module.scss";

const HeaderNav = ({ lang }) => {
  const { setMobileMenu, subMenu, setSubMenu } = useContext(SiteContext);

  const pathname = usePathname();

  useEffect(() => {
    setSubMenu(false);
  }, [pathname]);

  const { isMobile } = useWindowResize();

  const navLinksWithoutProducts = navLinksData.filter(
    (item) => item.titleEn !== "Products"
  );

  // object со вложенным списком продукции
  const productsNavLink = navLinksData.find(
    (item) => item.titleEn === "Products"
  );

  // если язык по умолчанию, то убираем его из url (в нашем случае uk)). Сделано для корректных адресов для ссылок в зависимости от текущего языка
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? "" : `/${lang}`;

  return (
    <nav className={styles.navBlock}>
      {isMobile && !subMenu && (
        <ul className={styles.navLinks}>
          {navLinksData.map((el, i) => {
            //  начинается проверка для отображения стилей активной страницы
            let checkedPath = `${path}${el.href}`;
            // дополнительная проверка для английского языка для отображнения activeLink на home (с url "/en/" убираем последний "/" для корректного сравнения с pathname)
            const resultPath =
              checkedPath === `/${i18n.locales[1]}/`
                ? checkedPath.slice(0, -1)
                : checkedPath;
            // проверка активна ли страница для отображения соответствующих стилей на ссылке
            const isActivePage = pathname.endsWith(resultPath);
            // заканчивается проверка

            const isProductItem = el.titleEn === "Products";

            return (
              <li key={i}>
                <div
                  className={styles.titleWrapp}
                  id={isActivePage ? "activePageLink" : null}
                >
                  {/* при клике на products - открывается или закрывается подменю. при клике на ссылки других страниц - закрытие БургерМеню и переход на другую страницу */}
                  {isProductItem ? (
                    <span
                      className={styles.productsItem}
                      onClick={() => {
                        setSubMenu(true);
                      }}
                    >
                      {lang === i18n.locales[0] ? el.titleUk : el.titleEn}
                    </span>
                  ) : (
                    <Link
                      href={`${path}${el.href}`}
                      onClick={() => {
                        setMobileMenu(false);
                      }}
                    >
                      {lang === i18n.locales[0] ? el.titleUk : el.titleEn}
                    </Link>
                  )}

                  {el.productsId && (
                    <svg
                      className={styles.arrowStyles}
                      onClick={() => {
                        setSubMenu(true);
                      }}
                    >
                      <use href="/sprite.svg#icon-schevron_right"></use>
                    </svg>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}

      {isMobile && subMenu && (
        <div>
          <div className={styles.titleWrapp}>
            {/* при клике на products - открывается или закрывается подменю. */}
            <span
              className={styles.productsItem}
              onClick={() => {
                setSubMenu(false);
              }}
            >
              {lang === i18n.locales[0]
                ? headerProductsData.titleUk
                : headerProductsData.titleEn}
            </span>
            <svg
              className={`${styles.arrowStyles} ${styles.arrowStylesClicked}`}
              onClick={() => {
                setSubMenu(false);
              }}
            >
              <use href="/sprite.svg#icon-schevron_right"></use>
            </svg>
          </div>
          <ul className={`${styles.subMenu} ${styles.subMenuVisible}`}>
            {headerProductsData.productsId.map((el, i) => {
              //  начинается проверка для отображения стилей активной страницы
              let checkedPath = `${path}${el.href}`;
              // дополнительная проверка для английского языка для отображнения activeLink на home (с url "/en/" убираем последний "/" для корректного сравнения с pathname)
              const resultPath =
                checkedPath === `/${i18n.locales[1]}/`
                  ? checkedPath.slice(0, -1)
                  : checkedPath;
              // проверка активна ли страница для отображения соответствующих стилей на ссылке
              const isActivePage = pathname.endsWith(resultPath);
              // заканчивается проверка

              return (
                <li
                  key={i}
                  className={styles.subMenuItem}
                  id={isActivePage ? "activePageLink" : null}
                >
                  <svg>
                    <use href="/sprite.svg#icon-dot"></use>
                  </svg>

                  <Link
                    href={`${path}${el.href}`}
                    onClick={() => {
                      setSubMenu(false);
                      setMobileMenu(false);
                    }}
                  >
                    {lang === i18n.locales[0] ? el.titleUk : el.titleEn}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {!isMobile && (
        <>
          <ul className={styles.navLinks}>
            {navLinksWithoutProducts.map((el, i) => {
              //  начинается проверка для отображения стилей активной страницы
              let checkedPath = `${path}${el.href}`;
              // дополнительная проверка для английского языка для отображнения activeLink на home (с url "/en/" убираем последний "/" для корректного сравнения с pathname)
              const resultPath =
                checkedPath === `/${i18n.locales[1]}/`
                  ? checkedPath.slice(0, -1)
                  : checkedPath;
              // проверка активна ли страница для отображения соответствующих стилей на ссылке
              const isActivePage = pathname.endsWith(resultPath);
              // заканчивается проверка

              return (
                <li key={i}>
                  <div
                    className={styles.titleWrapp}
                    id={isActivePage ? "activePageLink" : null}
                  >
                    <Link
                      href={`${path}${el.href}`}
                      onClick={() => {
                        setMobileMenu(false);
                        setSubMenu(!subMenu);
                      }}
                    >
                      {lang === i18n.locales[0] ? el.titleUk : el.titleEn}
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="">
            <span className={`${styles.productsTitle} ${styles.productsItem}`}>
              {lang === i18n.locales[0]
                ? productsNavLink.titleUk
                : productsNavLink.titleEn}
            </span>
            <ul className={`${styles.subMenu} ${styles.subMenuVisible}`}>
              {productsNavLink.productsId.slice(0, 4).map((item, i) => {
                // проверка активна ли страница для отображения соответствующих стилей на ссылке
                const isActivePage = pathname.endsWith(item.href);

                return (
                  <li
                    key={i}
                    className={styles.subMenuItem}
                    id={isActivePage ? "activePageLink" : null}
                  >
                    <svg>
                      <use href="/sprite.svg#icon-dot"></use>
                    </svg>

                    <Link
                      href={`${path}${item.href}`}
                      onClick={() => {
                        setMobileMenu(false);
                        setSubMenu(!subMenu);
                      }}
                    >
                      {lang === i18n.locales[0] ? item.titleUk : item.titleEn}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className={`${styles.subMenu} ${styles.subMenuVisible}`}>
            {productsNavLink.productsId.slice(4).map((item, i) => {
              // проверка активна ли страница для отображения соответствующих стилей на ссылке
              const isActivePage = pathname.endsWith(item.href);

              return (
                <li
                  key={i}
                  className={styles.subMenuItem}
                  id={isActivePage ? "activePageLink" : null}
                >
                  <svg>
                    <use href="/sprite.svg#icon-dot"></use>
                  </svg>

                  <Link
                    href={`${path}${item.href}`}
                    onClick={() => {
                      setMobileMenu(false);
                      setSubMenu(!subMenu);
                    }}
                  >
                    {lang === i18n.locales[0] ? item.titleUk : item.titleEn}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </nav>
  );
};

export default HeaderNav;
