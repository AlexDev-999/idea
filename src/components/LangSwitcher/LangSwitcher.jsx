"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = ({ lang }) => {
  const pathName = usePathname();

  const redirectedPathName = () => {
    let locale = "";

    if (lang === "uk") {
      locale = "en";
    } else locale = "uk";

    if (!pathName) return "/";

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  return (
    <Link className={styles.langSwitcherBtn} href={redirectedPathName()}>
      <svg>
        <use href="/sprite.svg#icon-language"></use>
      </svg>
    </Link>
  );
};

export default LangSwitcher;
