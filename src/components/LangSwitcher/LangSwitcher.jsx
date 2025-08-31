// "use client";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { i18n } from "@/dictionaries/i18n.config";
// import styles from "./LangSwitcher.module.scss";

// const LangSwitcher = ({ lang }) => {
//   const pathName = usePathname();

//   const redirectedPathName = () => {
//     let locale = "";

//     if (lang === "uk") {
//       locale = "en";
//     } else locale = "uk";

//     if (!pathName) return "/";

//     const pathnameIsMissingLocale = i18n.locales.every(
//       (locale) =>
//         !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
//     );

//     if (pathnameIsMissingLocale) {
//       if (locale === i18n.defaultLocale) return pathName;
//       return `/${locale}${pathName}`;
//     } else {
//       if (locale === i18n.defaultLocale) {
//         const segments = pathName.split("/");
//         const isHome = segments.length === 2;
//         if (isHome) return "/";

//         segments.splice(1, 1);
//         return segments.join("/");
//       }

//       const segments = pathName.split("/");
//       segments[1] = locale;
//       return segments.join("/");
//     }
//   };

//   return (
//     <Link className={styles.langSwitcherBtn} href={redirectedPathName()}>
//       <svg>
//         <use href="/sprite.svg#icon-language"></use>
//       </svg>
//     </Link>
//   );
// };

// export default LangSwitcher;

"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = ({ lang }) => {
  const pathName = usePathname();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const switcherRef = useRef(null);

  const getRedirectPath = (targetLang) => {
    if (!pathName) return "/";
    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      if (targetLang === i18n.defaultLocale) return pathName;
      return `/${targetLang}${pathName}`;
    } else {
      if (targetLang === i18n.defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";
        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathName.split("/");
      segments[1] = targetLang;
      return segments.join("/");
    }
  };

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.langSwitcher} ref={switcherRef}>
      <button
        aria-label="Lang switcher"
        className={styles.toggleBtn}
        onClick={() => setIsLangMenuOpen((prev) => !prev)}
      >
        <svg>
          <use href="/sprite.svg#icon-language"></use>
        </svg>
      </button>

      {isLangMenuOpen && (
        <div className={styles.dropdown}>
          {i18n.locales.map((locale) => (
            <Link
              key={locale}
              href={getRedirectPath(locale)}
              className={`${styles.langOption} ${
                lang === locale ? styles.active : ""
              }`}
              onClick={() => setIsLangMenuOpen(false)}
            >
              {locale.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
