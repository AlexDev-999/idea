import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./CustomLink.module.scss";

export default function CustomLink({ linkCustomClass, href, lang, text }) {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;

  return (
    <Link className={styles.link + " " + linkCustomClass} href={path}>
      {text.toUpperCase()}
      <svg className={styles.arrowIcon}>
        <use href="/sprite.svg#icon-arrow-right" />
      </svg>
    </Link>
  );
}
